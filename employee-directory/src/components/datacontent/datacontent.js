import React, {useState, useEffect} from "react";
import TableData from "../tabledata/tabledata";
import Nav from "../nav/nav";
import API from "../../utils/api";
import SearchContext from "../../utils/searchcontext"

//sets the heading width

const DataContent = () => {
      const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
          { name: "Image", width: "10%", },
          { name: "Name", width: "10%", },
          { name: "Phone", width: "20%", },
          { name: "Email", width: "20%", },
          { name: "DOB", width: "10%", }
        ]
      });

      //sets the sort order
    
      const handleSort = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order:"ascend"
            })
        } else if (developerState.order === "ascend"){
            setDeveloperState({
                order:"descend"
            })
        }

        //compares the items and sorts them
    
        const compareFnc = (a, b) => {
          if (developerState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else if (developerState.order === "descend") {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return a[heading].first.localeCompare(b[heading].first);
        } else {
        return b[heading] - a[heading];
        }
    }
    }
        const sortedUsers = developerState.filteredUsers.sort(compareFnc);

        setDeveloperState({
          ...developerState,
          filteredUsers: sortedUsers
});

 };
   
      const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setDeveloperState({ 
        ...developerState, 
        filteredUsers: filteredList });
      };

      useEffect(() => {
        API.getEmployees().then(results => {
          setDeveloperState({
            ...developerState,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }, []);
    
      return (
        <SearchContext.Provider
          value={{ developerState, handleSearchChange, handleSort }}
        >
          <Nav />
          <div className="data-area">
            {developerState.filteredUsers.length > 0 
    ? <TableData />
     : <div></div>
     }
          </div>
        </SearchContext.Provider>
      );
    }
    
    export default DataContent;