import React, { Fragment } from 'react'
import{ Routes, Route} from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import PageTwo from '../pages/PageTwo';

const AppRouter = () => {
  return (
    <Fragment>
      <Routes >
          <Route path='*' element={<NotFoundPage />} />
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="page-two" element={<PageTwo />}/>
          <Route exact path="detail" element={<DetailPage/>}/>
      </Routes>
    </Fragment>
  )
}

export default AppRouter