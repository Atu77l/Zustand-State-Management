import create from 'zustand';

import {devtools, persist} from 'zustand/middleware'

// type State = {
//     count: number
//   }
  
//   type Actions = {
//     increment: (qty: number) => void
//     decrement: (qty: number) => void
//   }
// userStore.js
// import create from 'zustand';

// const useUserStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   clearUser: () => set({ user: null }),
// }));

// export default useUserStore;

const courseStore = (set) => ({
    courses: [],     //firstly,We will set a default variable.
    addCourse: (course) => {     // Now,there is a method to update on it.Same like as take a original value and update it as setUpdate in useState.
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },  
    removeCourse: (courseId) => {     //Now,there is another method to remove an item from course with respect to course id
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {       //Another method to change the status
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? {...course, completed: !course.completed} : course)
        }))
    }
})

// Now,We will make a above code as a store and perform action in another component to perform it.
const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses",
        })
    )
)


export default useCourseStore;