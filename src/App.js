import { useState } from "react";
import EmailBody from "./EmailBody.jsx";

function App() {
  let [instances,setInstances] = useState({from:"Mrs. QWERTY", to:"Mr. ASDFGH"});
  return (
    <div className="App">
      <EmailBody RecieverName={instances.from} SenderName={instances.to} />
    </div>
  );
}

export default App;
