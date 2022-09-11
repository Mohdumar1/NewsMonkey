// import { parse } from 'postcss';
import React, {useEffect, useState} from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
// import { parse } from 'postcss';

const News = (props) => {
  //! https://newsapi.org/v2/top-headlines?country
  // You are repeating this URL multiple places, put it in a variable

 

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalresults, settotalresults] = useState(0);

 

     const  updateNews = async () =>{
      props.setProgress(10)
      const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fbd1bf53b959460196001160f2ff4da5&page=${page}&pageSize=${props.pagesize}`;
       setloading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parseData = await data.json();
        // console.log(parseData);
        props.setProgress(70)
        setarticles(parseData.articles)
        settotalresults(parseData.totalResults)
        setloading(false)
       props.setProgress(100); 
    }

    useEffect(() => {
      updateNews();
      // esline-disable-next-line
    }, []);

    

    //  const handlePreviousClick = async ()=>{
    //   setpage(page - 1)
    //   updateNews()
    // }

   
    //   const handleNextClick = async()=>{
    //   setpage(page + 1)
    //   updateNews()
    // }

      const fetchMoreData = async () => {
        setpage(page + 1)
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fbd1bf53b959460196001160f2ff4da5&page=${page}&pageSize=${props.pagesize}`;
      //  setloading(true)
       let data = await fetch(url);
       let parseData = await data.json();
       setarticles(articles.concat(parseData.articles))
       settotalresults(parseData.totalResults)
      //  setloading(false)
   };
      
    
    

    return (
      <div className='container my-3'>
        <h2 style={{marginTop:'90px'}}>Top Headline</h2>
        {loading && <Spinner/>}
        
        <InfiniteScroll 
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalresults}
        loader={<Spinner/>} >

          <div className="row">
          {articles.map((element)=>{
              return  <div className="col-md-4 sm-12 my-3" key={element.url}>
                          <Newsitem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgURL={element.urlToImage} NewsURL={element.url} publishDate={element.publishedAt} author={!element.author? "unknown": element.author} source={element.source.name}/>
                      </div>
          })}
          </div>
        </InfiniteScroll>
      </div>
    )
  }


News.defaultProps = {
  country: 'in',
  pagesize: 10,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}

 export default News;