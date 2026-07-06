
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
 

  return (
      <>
        <Header/>

        <h2> A Family Safety App.</h2>
        <p>
          CareConnect is a Family Safety App designed to help users stay connected with their family and trusted contacts in real time. In today’s busy and sometimes unsafe world, it is important to keep loved ones informed about your safety, especially while traveling, working late, or being alone in unfamiliar places. This app allows users to quickly share their current status and location with just a single click.
         <br />
         Users can send instant updates such as “I have reached home safely,” “I am traveling,” or “I need help,” along with optional custom messages. These updates are immediately sent to all saved trusted contacts so that family members are always aware of the user’s situation. The app is especially useful during emergencies, late-night travel, or daily commuting.
         <br />
        CareConnect also helps reduce anxiety for families by improving communication and building a stronger sense of safety and trust. Its simple and user-friendly design ensures that anyone can use it easily without technical knowledge.
        </p>

          <Footer/>
      </>
  )
}

export default App;
