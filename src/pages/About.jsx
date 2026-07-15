
import careConnectTogether from '../assets/images/careconnecttogether.jpg';
import family from '../assets/images/family.jpg';
import lovedOnes from '../assets/images/lovedones.jpg';
import fatherLove from '../assets/images/fatherLove.jpg';
import staySafe from '../assets/images/staySafe.jpg';
import together from '../assets/images/together.jpg';
import emergency from '../assets/images/emergency.jpg';


function About(){
     
   const images = [careConnectTogether, family, lovedOnes, fatherLove, staySafe, together, emergency];

    return(
       
       <main className="about-container">     

            <section className = 'about-gallery'>

                <h2> CareConnect features</h2>

                <div className='image-container'>
                    {images.map((image, index) => (
                        <img src = {image}
                             key = {index}
                             alt = 'CareConnect Safety features'/>
                    ))}

                </div>

            </section>    

            <section className="about-intro">
                <h2>Introduction About the App</h2>
                <p>
                  CareConnect is a Family Safety Application designed to help people stay connected with their loved ones and trusted contacts during daily activities, travel, and emergency situations. The main purpose of CareConnect is to provide a simple and reliable way for users to share their safety status, location, and important updates whenever support is needed.  
                    In today's busy world, many people travel alone for work, education, or personal activities. CareConnect helps reduce safety concerns by allowing users to quickly send updates such as reaching home safely, traveling, or requesting help. These updates are shared with selected trusted contacts so that family members and friends can stay informed about the user's situation.  
                </p>
            </section>

            

         <div className="mission-vision-container">

            <section className="about-card">
                <h2> Mission</h2>
                  <ul>
                     <li> 
                        To provide a simple and reliable safety platform that helps
                        users stay connected with their trusted contacts.
                     </li>

                     <li> 
                        To enable quick communication through safety updates and
                        emergency alerts during important situations.
                     </li>

                     <li> 
                        To support users by providing secure and easy-to-use safety
                        features for everyday activities.
                     </li>

                     <li>
                        To help families stay informed and connected whenever support
                        is needed.
                     </li>

                  </ul>
            </section>

            <section className="about-card">
                 <h2> Vision</h2>
                  <ul>
                     <li>
                       To create a safer and more connected community where people
                       can feel confident during their daily activities.
                     </li>

                     <li>
                        To become a trusted safety application that improves
                        communication between users and their loved ones.
                     </li>

                     <li>
                        To provide innovative safety features that make emergency
                        support faster and easier.
                     </li>

                     <li>
                        To build a future where technology helps protect and connect
                        families.
                     </li>
                  </ul>
            </section>
         </div>

            <section className="why-careconnect">

                <h2>Why You have to Choose Care Connect App ?</h2>
                 
                <h3>Simple and Reliable Safety Solution</h3>
                <p>
                    CareConnect provides a simple way for users to stay connected with
                    their trusted contacts. Users can share safety updates and important
                    information whenever support is needed.
                </p>

                <h3>Quick Emergency Communication</h3>
                <p>
                   During emergency situations, users can quickly send alerts to their
                   trusted contacts, helping families stay informed and respond faster.
                </p>

                <h3>Location Sharing and Safety Updates</h3>
                <p>
                   CareConnect allows users to share their location and safety status
                   during travel, work, or daily activities, creating confidence for
                   both users and their loved ones.
                </p>

                <h3>User-Friendly Experience</h3>
                <p>
                  The application is designed with simple navigation and secure
                  communication features so users can access safety tools easily.
                </p>
                   

            </section>

        </main>

    );
}


export default About;