import React, {createContext, useContext} from "react";


const CoursesContext = createContext({});

export const useCourses = () => useContext(CoursesContext);



export default CoursesContext;