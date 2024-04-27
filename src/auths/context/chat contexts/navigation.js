import { createContext, useContext } from "react";

 const NavContext = createContext({
    settingsControls:{},
    setSettingsControls:()=>{},
    ShowProfile: ()=>{},
    setShowProfile: ()=>{},
    showIputFor: {},
    setShowInputFor: ()=>{},
    userGroupData:{},
    ResetUserData:()=>{},
    resetProfileData:{},
    SubmitNewPrifleData:()=>{},
    ToggleSettings:()=>{},
    showProfile: false,
    SendInformation:()=>{},
    ToggleAtiveNav:()=>{}


    
  })

  export const Nav_StateProvider = ({children,...rest})=>{


return <NavContext.Provider value={rest} >
{children}
</NavContext.Provider>
  }

  export const Nav_state = ()=>{
    return useContext(NavContext)
  }