import Profile from "./components/Profile";

export default function App() {
   return (
     <div className="app">
       <Profile
         avatar="..."
         name="Guilherme Rodrigues"
         bio="Full=stack JavaScript developer at Acme Inc."
         email="gui.roco007@gmail.com"
         phone="+55938274012"
         githubUrl="..."
         linkedinUrl="..."
         twitterUrl="..."
       />
     </div>
   );
}