import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {


    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 2,
        tagName: "python",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 3,
        tagName: "c#",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 4,
        tagName: "java",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 5,
        tagName: "php",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 6,
        tagName: "html",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 7,
        tagName: "android",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 8,
        tagName: "css",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 9,
        tagName: "Reactjs",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
    }, {
        id: 10,
        tagName: "node.js",
        tagDesc: "lorem 64 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil, soluta dicta ipsa perferendis laudantium vitae harum ratione omnis quaerat facere nam nemo? Vitae soluta accusamus omnis. Tempora, maxime nobis."
        
    }]


  return (
    <div className='home-container-1'>
          <LeftSidebar />
          <div className="home-container-2">
              <h1 className='tags-h1'>Tags</h1>
              <p className='tags-p'>A tag is a keyword or label that categories your question with other, similar questions.</p>
              <p className='tags-p'>Using the right tags makes it easier for others to find ans answer your questions.</p>
              <div className='tags-list-container'>
                  {
                      tagsList.map((tag) => (
                          <TagsList tag={tag} key={tagsList.id } />
                      ))
                  }
              </div>
          </div>
    </div>
  )
}

export default Tags
