// import { parse } from 'postcss';
import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export class News extends Component {
  //! https://newsapi.org/v2/top-headlines?country
  // You are repeating this URL multiple places, put it in a variable

  articles = [
    {
      source: {
        id: 'espn-cric-info',
        name: 'ESPN Cric Info',
      },
      author: 'Valkerie Baynes',
      title: 'Cricket at the 2022 Commonwealth Games - all you need to know - ESPNcricinfo',
      description:
        '<ol><li>Cricket at the 2022 Commonwealth Games - all you need to know  ESPNcricinfo\r\n</li><li>CWG 2022: 5 top Indian medal contenders  Times of India\r\n</li><li>Judo at Commonwealth Games 2022: Schedule, Indian squad, format, timings, venue  Sportstar\r\n</li><l…',
      url: 'https://www.espncricinfo.com/story/cricket-at-the-2022-commonwealth-games-all-you-need-to-know-1326262',
      urlToImage:
        'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/339600/339682.6.jpg',
      publishedAt: '2022-07-26T13:48:51Z',
      content:
        'After winning the T20I and ODI World Cups in the last two years, Australia are favourites for the gold medal at the Commonwealth Games  •  Getty Images',
    },
  ];

  static defaultProps = {
    country: 'in',
    pagesize: 10,
    category: 'general',
  };

  // static propTypes = {
  //   country: PropTypes.string,
  //   pagesize: PropTypes.number,
  //   category: PropTypes.string,
  // }

    constructor(){
        super();
        // console.log("hello this is constructor form newscomponenet");
        this.state = {
            articles: this.articles,
            loading: false,
            page:1,
            totalResults: 0
        }
    }

     async updateNews(){
      const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbd1bf53b959460196001160f2ff4da5&page=${this.state.page}&pageSize=${this.props.pagesize}`;
       this.setState({loading: true});
        let data = await fetch(url);
        // console.log(data);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({articles: parseData.articles,
                       totalResults: parseData.totalResults,
                       loading: false},
                       ) 
    }

    async componentDidMount(){
        console.log("cdm");
       let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbd1bf53b959460196001160f2ff4da5&page=1&pageSize=${this.props.pagesize}`;
       this.setState({loading: true});
        let data = await fetch(url);
        // console.log(data);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({articles: parseData.articles,
                       totalResults: parseData.totalResults,
                       loading: false})
    }

     handlePreviousClick= async ()=>{
       //commented this function after making updateNews fuction

      //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbd1bf53b959460196001160f2ff4da5&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
      //  this.setState({loading: true});
      //  let data = await fetch(url);
      //  let parseData = await data.json();
      //  this.setState({
      //    page: this.state.page - 1,
      //   articles: parseData.articles,
      //   loading: false
      // })
      this.setState({page: this.state.page - 1});
      this.updateNews()
    }

   
     handleNextClick= async()=>{
       //commented this function after making updateNews fuction

      // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
      //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbd1bf53b959460196001160f2ff4da5&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
      //  this.setState({loading: true});
      //  let data = await fetch(url);
      //  let parseData = await data.json();
      //  this.setState({
      //    page: this.state.page + 1,
      //    articles: parseData.articles,
      //    loading: false
      //   })
      // }
      this.setState({page: this.state.page + 1})
      this.updateNews()
    }

     fetchMoreData= async () => {
      this.setState({page: this.state.page + 1})
      const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbd1bf53b959460196001160f2ff4da5&page=${this.state.page}&pageSize=${this.props.pagesize}`;
      this.setState({loading: true});
       let data = await fetch(url);
       let parseData = await data.json();
       this.setState({articles: this.state.articles.concat(parseData.articles),
                      totalResults: parseData.totalResults,
                      loading: false,
                      
              }) 
   };
      
    
    

  render() {
    return (
      <div className='container my-3'>
        <h2 >Top Headline</h2>
        {/* {this.state.loading && <Spinner/>} */}
        
        <InfiniteScroll 
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner/>} >
          <div className="row">
          {this.state.articles.map((element)=>{
              return  <div className="col-md-4 sm-12 my-3" key={element.url}>
                          <Newsitem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgURL={element.urlToImage} NewsURL={element.url} publishDate={element.publishedAt} author={!element.author? "unknown": element.author} source={element.source}/>
                      </div>
          })}
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr; </button>
      </div> */}
      </div>
    )
  }
}

 export default News;