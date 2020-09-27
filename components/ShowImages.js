import React, { useEffect, useRef } from 'react';

const ShowImages = ({ images, goNext }) => {

    const ulRef = useRef();

    useEffect(() => {
        document.addEventListener('scroll', checkScroll);
        return () => {
            // console.log('after delete');
            document.removeEventListener('scroll', checkScroll);
        }
    });

    const checkScroll = () => {
        // if the distance from top of the current view to the bottom of the div 
        // is smaller than the height of the current view
        if (ulRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
            // console.log("reached bottom");
            goNext();
            document.removeEventListener('scroll', checkScroll);
        }
    }

    const imageElements = images.map((image, idx) => {
        return (
            <li key={idx} className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                    <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">
                            Photographer: {image.user}
                        </h5>
                        <p className="font-italic text-muted mb-0 small">
                            Tags: {image.tags}
                        </p>
                        <div className="d-flex align-items-center justify-content-between mt-1">
                            <a
                                href={image.largeImageURL}
                                className="btn btn-primary"
                                target="_blank"
                            >show large image</a>
                            <ul className="list-inline small">
                                <li className="list-inline-item m-0">
                                    <i className="fa fa-star text-success"></i>
                                </li>
                                <li className="list-inline-item m-0">
                                    <i className="fa fa-star text-success"></i>
                                </li>
                                <li className="list-inline-item m-0">
                                    <i className="fa fa-star text-success"></i>
                                </li>
                                <li className="list-inline-item m-0">
                                    <i className="fa fa-star text-success"></i>
                                </li>
                                <li className="list-inline-item m-0">
                                    <i className="fa fa-star-o text-gray"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src={image.previewURL}
                        alt="Generic placeholder image"
                        width="200"
                        className="ml-lg-5 order-1 order-lg-2"
                    />
                </div>
            </li>
        );
    });
    // console.log(imageElements);
    return (
        <ul ref={ulRef} className="list-group shadow mb-3">
            {imageElements}
        </ul>
    );
}

export default ShowImages;