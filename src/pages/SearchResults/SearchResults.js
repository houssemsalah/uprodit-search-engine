import React from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';

const SearchResults = ({ results, loading }) => {

  const renderResults = () => {
  
    if (loading) {
      return <p style={{display:"flex" , justifyContent:"center"  ,margin:"200px",fontSize:"30px" }}>Loading ..</p>;
    }
    if (results?.length === 0) {
      return <p p style={{display:"flex" , justifyContent:"center"  ,margin:"200px",fontSize:"30px" }}>No results found.</p>;
    }
   
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', margin: '30px' }}>
        {results?.map((result) => (
          <SearchResult data={result} key={result.id} />
        ))}
      </div>
    );
  };

  return (
    <div style={{margin:'50px'}} >
     
      {renderResults()}
    </div>
  );
};

export default SearchResults;
