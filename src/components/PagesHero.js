import React from 'react';
import propTypes from 'prop-types';
PagesHero.propTypes={
  title:propTypes.string,
  subText:propTypes.string,
  bgClass:propTypes.string,
}

function PagesHero ({title, subText, bgClass}){
return (

  <div>
<section>
<div className={`jumbotron hero-pages d-flex align-items-center ${bgClass}`}>
<div className="container">
<h1>{title}</h1>
<p>{subText}</p>
</div>
</div>
</section>
</div>
)}

export default PagesHero;