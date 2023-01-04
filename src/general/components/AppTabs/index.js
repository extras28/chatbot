import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import "./index.scss";


/**
 * @props className (string): không bắt buộc
 * @props tabs (array string): Mảng tên các tab theo thứ tự đảo ngược
 * @props activeTab (string): Tên active tab. K bắt buộc, mặc định là tab đầu
 * @props handleClick(tabName) : Hàm callback tới node cha khi click vào tab
 */
function AppTabs(props) {
    const id = uuidv4();

    const tabs = props.tabs;
    const activeTab = props.activeTab ? props.activeTab : tabs[tabs.length - 1];

    const onClick = (tab) => {
        props.handleClick(tab);
    }

    useEffect(() => {
        var allTabs = document.getElementById(id).getElementsByClassName('tab');
        for (var i = 0, len = allTabs.length; i < len; i++) {
            allTabs[i].addEventListener("click", function () {
                if (this.classList.contains('active')) return;

                var parent = this.parentNode,
                    innerTabs = parent.querySelectorAll('.tab');

                for (var index = 0, iLen = innerTabs.length; index < iLen; index++) {
                    innerTabs[index].classList.remove('active');
                }

                this.classList.add('active');
            });
        };
    }, []);


    return (
        <div className={'Tabs_Container ' + props.className} id={id}>
            <div className='tabbed round d-flex flex-row-reverse justify-content-end'>
                {tabs.map((text, index) => {
                    return (
                        <div
                            key={index}
                            className={text == activeTab
                                ? 'tab active'
                                : 'tab'}
                            onClick={(e) => {
                                e.preventDefault();
                                onClick(text);
                            }}
                            style={index == (tabs.length - 1) ? { padding: '0.7rem 1.8rem 0.7rem 1.2rem' } : {}}
                        // style={index == (tabs.length - 1) ? { padding: '0.7rem 2.4rem 0.7rem 1rem' } : {}}
                        >
                            {text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AppTabs;
