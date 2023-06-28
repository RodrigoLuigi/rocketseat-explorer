import { Routes, Route } from 'react-router-dom';

import { NewMovie } from '../pages/NewMovie';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/new" element={<NewMovie />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/details/:id" element={<Details />}/>
    </Routes>
  );
}