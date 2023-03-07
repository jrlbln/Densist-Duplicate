import React from 'react';

const BlogListSearch = ()=> {
        return(
            <div className="card search-widget">
            <div className="card-body call-shadow">
                <form className="search-form">
                    <div className="input-group">
                        <input type="text" placeholder="Search..." className="form-control" />
                        <div className="input-group-prepend">
                            <button type="submit" className="btn btn-primary" style={{height: '100%'}}><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
export default BlogListSearch;