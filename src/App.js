import Header from "./components/ui/Header";
import HookForm from "./components/HookForm";

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {

  

  function requestHandler(data) {

    fetch(data.hook, {
      method:"post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:data.userName,
        content:data.message
      })
    }).then(res => {
      if (res.ok) {
        NotificationManager.success('successfully sent');
      } else {
        NotificationManager.error('Please try again');
      }
    }).catch(err => {
      NotificationManager.error('Please try again');
    })

  }

  return (
    <div className="App">
        <NotificationContainer/>
      <div className="AppContainer">
          <Header />
          <HookForm handler={requestHandler} />
      </div>
    </div>
  );
}

export default App;
