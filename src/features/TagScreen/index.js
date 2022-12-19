import React from "react";
import PropTypes from "prop-types";
import AppButton from "general/components/AppButton";
import BaseLayout from "general/components/BaseLayout";

import "./style.scss";

TagScreen.propTypes = {
    tagName: PropTypes.string,
    tagDecrible: PropTypes.string,
    tagDecribleMore1: PropTypes.string,
    tagDecribleMore2: PropTypes.string,
};

TagScreen.defaultProps = {
    tagName: "javascript",
    tagDecrible: "For questions about programming in ECMAScript JavaScript/JS and its different dialects /implem entations except for ActionScript. Keep in mind adva afvdfbvsdf dsfvsdf sdfv vsdfvc  sdvdf vdv fsdv sdfv sdfv sv", 
    tagDecribleMore1: "2032354354 questions",
    tagDecribleMore2: "353245434 answers 55555 like",
};
function TagScreen(props) {
    const { tagName, tagDecrible, tagDecribleMore1, tagDecribleMore2 } = props;
    return (    
        <BaseLayout>  
            <div className="component-container">
                <div className="d-block col-8 p-0">
                    <h1 className="header-label fs-2">Thẻ</h1>
                    <br/>
                    <div className="header-text fs-6 fw-semibold">
                        Thẻ là một từ khóa hoặc nhãn phân loại câu hỏi của bạn với các câu hỏi tương tự khác. Sử dụng các thẻ phù hợp giúp người khác dễ dàng tìm và trả lời câu hỏi của bạn dễ dàng hơn.
                    </div>
                    <a href="/test" className="header-link pb-3 pt-3 mb-3 mt-2 d-block">Hiển thị tất cả các thẻ</a>
                </div>

                <div className="d-flex justify-content-center col-12 p-0">
                    <div className="position-relative">
                        <input id="tagfilter" className="ps-5 pt-2 pb-2 pe-2 tagfilter" autocomplete="off" name="tagfilter" type="text" maxlength="35" placeholder="Tìm kiếm theo tên" autofocus=""/>
                        <i className="fas fa-search tagfilter-icon"></i>
                    </div>

                    <div className="ml-auto d-flex mb-4">
                        <a className="text-dark ps-3 pe-3 pt-2 pb-2 border rounded-start border-gray button-hover-c background-select-tag" href="/tags?tab=popular" data-nav-xhref="" title="most popular tags" data-value="popular" data-shortcut="" aria-current="page">
                            Phổ biến</a>
                        <a className="text-dark ps-3 pe-3 pt-2 pb-2 border-index-center button-hover-c" href="/tags?tab=name" data-nav-xhref="" title="tags in alphabetical order" data-value="name" data-shortcut="">
                            Tên</a>
                        <a className="text-dark ps-3 pe-3 pt-2 pb-2 border rounded-end border-gray button-hover-c" href="/tags?tab=new" data-nav-xhref="" title="recently created tags" data-value="new" data-shortcut="">
                            Mới</a>
                    </div>   
                </div>


            
                <div className="row ps-2 pe-2">
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
                        <div className="d-flex flex-column p-4 tag-container">
                            <div className="post-tag">
                                <a href="/" className="post-tag-link" title="" aria-label="show questions tagged 'javascript'" rel="tag" aria-labelledby="javascript-container">
                                    {tagName}
                                </a>
                            </div>
                            <p className="post-tag-desc">
                                {tagDecrible}
                            </p>
                            <div className="post-tag-descmore text row">
                                <p className="col-4 text-start">
                                    {tagDecribleMore1}
                                </p>
                                <a href="/" className="col-8 text-start">
                                    {tagDecribleMore2}
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
                        <div className="d-flex flex-column p-4 tag-container">
                            <div className="post-tag">
                                <a href="/" className="post-tag-link" title="" aria-label="show questions tagged 'javascript'" rel="tag" aria-labelledby="javascript-container">
                                    {tagName}
                                </a>
                            </div>
                            <p className="post-tag-desc">
                                {tagDecrible}
                            </p>
                            <div className="post-tag-descmore text row">
                                <p className="col-4 text-start">
                                    {tagDecribleMore1}
                                </p>
                                <a href="/" className="col-8 text-start">
                                    {tagDecribleMore2}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
                        <div className="d-flex flex-column p-4 tag-container">
                            <div className="post-tag">
                                <a href="/" className="post-tag-link" title="" aria-label="show questions tagged 'javascript'" rel="tag" aria-labelledby="javascript-container">
                                    {tagName}
                                </a>
                            </div>
                            <p className="post-tag-desc">
                                {tagDecrible}
                            </p>
                            <div className="post-tag-descmore text row">
                                <p className="col-4 text-start">
                                    {tagDecribleMore1}
                                </p>
                                <a href="/" className="col-8 text-start">
                                    {tagDecribleMore2}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
                        <div className="d-flex flex-column p-4 tag-container">
                            <div className="post-tag">
                                <a href="/" className="post-tag-link" title="" aria-label="show questions tagged 'javascript'" rel="tag" aria-labelledby="javascript-container">
                                    {tagName}
                                </a>
                            </div>
                            <p className="post-tag-desc">
                                {tagDecrible}
                            </p>
                            <div className="post-tag-descmore text row">
                                <p className="col-4 text-start">
                                    {tagDecribleMore1}
                                </p>
                                <a href="/" className="col-8 text-start">
                                    {tagDecribleMore2}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
                        <div className="d-flex flex-column p-4 tag-container">
                            <div className="post-tag">
                                <a href="/" className="post-tag-link" title="" aria-label="show questions tagged 'javascript'" rel="tag" aria-labelledby="javascript-container">
                                    {tagName}
                                </a>
                            </div>
                            <p className="post-tag-desc">
                                {tagDecrible}
                            </p>
                            <div className="post-tag-descmore text row">
                                <p className="col-4 text-start">
                                    {tagDecribleMore1}
                                </p>
                                <a href="/" className="col-8 text-start">
                                    {tagDecribleMore2}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
                        <div className="d-flex flex-column p-4 tag-container">
                            <div className="post-tag">
                                <a href="/" className="post-tag-link" title="" aria-label="show questions tagged 'javascript'" rel="tag" aria-labelledby="javascript-container">
                                    {tagName}
                                </a>
                            </div>
                            <p className="post-tag-desc">
                                {tagDecrible}
                            </p>
                            <div className="post-tag-descmore text row">
                                <p className="col-4 text-start">
                                    {tagDecribleMore1}
                                </p>
                                <a href="/" className="col-8 text-start">
                                    {tagDecribleMore2}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6"></div>
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 p-0">
                        <div className="tag-page d-flex justify-content-between pe-3">
                            <AppButton className="tag-page-btn tag-page-btn--selected">1</AppButton>
                            <AppButton className="tag-page-btn">2</AppButton>
                            <AppButton className="tag-page-btn">3</AppButton>
                            <p>...</p>
                            <AppButton className="tag-page-btn">555</AppButton>
                            <AppButton className="tag-page-btn">Next</AppButton>

                        </div>
                    </div>

                </div>
            </div>
        </BaseLayout>

    );
}

export default TagScreen;
