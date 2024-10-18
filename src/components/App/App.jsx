import React  from 'react';
import './App.css'; // Include your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Routes , Route ,useParams } from 'react-router-dom';
//import data from '../DataFetch/FetchData.jsx'; // i have no idea how its still working 
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import LandingPage from '../../pages/LandingPage/landingPage.jsx';
import ShowAllPreview from '../../pages/Show All/ShowAll.jsx';
import Favorites from '../../pages/Favourites/Favourites.jsx';
import ShowDetails from '../../pages/Show Details/ShowDetails.jsx';
import FilterByGenrePage from '../../pages/Genre Filter Page/FilterGenrePage.jsx';
import ThemeToggle from '../Theme/ThemeToggle.jsx';
import { useTheme } from '../Theme/ThemeContext.jsx';

//remember we want to make like a filter modal to pop up  when the genre is selected

// App.jsx

function App() {
  const {theme} = useTheme();
  return (
    <BrowserRouter>
   
     <Header />
     <div className={`${theme}`}>
       <ThemeToggle/>
     </div>
           <Routes>
          
         <Route path="/" element={<LandingPage />} />
         <Route path="/home" element={<LandingPage />} />
         <Route path="/show-all" element={<ShowAllPreview />} />
         <Route path="/favorites" element={<Favorites />} />
         <Route path="/favorites/:showId" element={<Favorites />} />
         <Route path="/show/:id" element={<ShowDetails />} />
         <Route path="/filter/:genreId?" element={<FilterByGenrePage/>} />
       </Routes>
       
       <Footer />

    </BrowserRouter>
      
  );//note when user clicks the image it should take them to the episodes page 
  //is the search button is clicked a modal window must open
}

export default App;

