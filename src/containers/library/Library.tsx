import { Component } from "react";

import './Library.css';
import LibraryItem from '../../components/library-item/LibraryItem';

class Library extends Component<any, any> {
    render() {
        return(
            <main>
                <div className="library__wrapper">
                    <h2>Library</h2>
                    <p>Documents</p>
                    <div className="library_documentsBlock">
                        <button className="library__checkboxBtn selected">All</button>
                        <button className="library__checkboxBtn">All</button>
                        <button className="library__checkboxBtn">All</button>
                        <div className="library__documentsBlock-content">
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                            <LibraryItem />
                        </div>
                    </div>
                </div>
                
            </main>
        )
    }
}

export default Library;