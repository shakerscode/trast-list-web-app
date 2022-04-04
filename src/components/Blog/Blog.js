import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-section'>
            <div>
                <h1>What is context API?</h1>
                <p>Context API is something that helps us not to drilling props from component to components. It makes a way to send props without drilling. Ones we create a context api, than we can call it from any other components where we need!</p>
            </div>
            <div>
                <h1>What is Semantic Tag?</h1>
                <p>Semantic Tag are those tag that is meaningful with its work. Every semantic tag has a special meaning that goes with its work. Like Header tag defines that it is a header tag and it always set in the top position. It actually describes the type of content that the element should contain in it.  So, every semantic tag do different work in the webpages and browser know them clearly. Thay have different meaning and they do different and meaningful work for the web.</p>
            </div>
            <div>
                <h1>What is the difference between block, inline and inline block elements?</h1>
                <p> <b>Inline:</b> We aren't able to set inline elements width or height values. It doesn't start a new line. It only takes up as much width as necessary. <br />
                <b>Example:</b> span, small , a etc.
                <br />

                   <b>Block:</b> Block elements are alternative of inline element. It will start a new line and you are able to set it's height and width values. <br />
                    <b>Example:</b> div, p, h1 etc. <br />

                    <b>Inline-block:</b> It's like the inline element and it doesn't start a new line where you cat set its height and wudth values. </p>
            </div>

        </div>
    );
};

export default Blog;