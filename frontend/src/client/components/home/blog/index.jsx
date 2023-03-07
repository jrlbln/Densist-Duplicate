import React from 'react';
import blog1 from '../../../assets/images/blog/blog-img1.jpg';
import blog2 from '../../../assets/images/blog/blog-img2.jpg';
import blog3 from '../../../assets/images/blog/blog-img3.jpg';
import blog4 from '../../../assets/images/blog/blog-img4.jpg';

const Blog = () => {
	return (
		<section className="blog-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="section-header text-center mb-4">
						<h6>Blog</h6>
						<h2>Our Blogs</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-md-6 col-lg-3">
						<div className="blog-box">
							<div className="blog-img">
								<img src={blog1} alt="" />
							</div>
							<div className="blog-content">
								<span>
									<i>Jan 26 | Admin</i>
								</span>
								<h2>Lorem Ipsum has been the industry's</h2>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<div className="blog-box">
							<div className="blog-img">
								<img src={blog2} alt="" />
							</div>
							<div className="blog-content">
								<span>
									<i>Jan 26 | Admin</i>
								</span>
								<h2>Lorem Ipsum has been the industry's</h2>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque.
								</p>
							</div>
						
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<div className="blog-box">
							<div className="blog-img">
								<img src={blog3} alt="" />
							</div>
							<div className="blog-content">
								<span>
									<i>Jan 26 | Admin</i>
								</span>
								<h2>Lorem Ipsum has been the industry's</h2>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque.
								</p>
							</div>
						
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<div className="blog-box">
							<div className="blog-img">
								<img src={blog4} alt="" />
							</div>
							<div className="blog-content">
								<span>
									<i>Jan 26 | Admin</i>
								</span>
								<h2>Lorem Ipsum has been the industry's</h2>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque.
								</p>
							</div>
						
						</div>
					</div>
					<div className="col-12 col-md-12 blog-bottom text-center pt-5">
						<a href="#" className="view-all">
							View All
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
