import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
   let  {title,description, imgURL,  NewsURL, publishDate, author, source} = this.props

    return (
      <>
      <div>
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {source}
          <span class="visually-hidden">unread messages</span>
  </span>
          <img src={imgURL} style={{maxHeight: '200px', minHeight: '200px', objectFit: 'cover'}} className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}...
            </p>
            <a href={NewsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a> 
            <p className="py-1"><small className="text-muted">By <b>{author}</b> on {new Date(publishDate).toTimeString()}</small></p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Newsitem;
