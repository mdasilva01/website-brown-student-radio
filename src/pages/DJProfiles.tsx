import React from 'react';
import './DJProfiles.css';
//import TagsInput from '../components/TagsInput';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'
const About: React.FC = () => {

  const [tags, setTags] = React.useState(["DJ"]);
  const id = React.useId();

  async function queryObjects(query: any) {
    const response = await fetch(`https://api.cosmicjs.com/v3/buckets/my-project-production-8d04eb10-94a1-11ef-bd4d-8d05011bda81/objects?pretty=true&query=%7B%22type%22:%22authors%22%7D&limit=10&read_key=FKGvgkSabJOy897MA5ZsYJosVRbb67gqVDf8iYauhw8waywfhP&depth=1&props=slug,title,metadata`);
    return (await response.json()).objects;
}

  const allTags = [
    'DJ',
    'Blues',
    'Jazz',
    'Country',
    'Carnatic',
    'Classical',
    'Hip Hop',
    'Rap'
  ]

  const projects = [
    {
      title: 'James',
      description:
        'DJ from Mars',
      tags: ['DJ', 'Blues'],
    },
    {
      title: 'Yohan',
      description: 'National jazz competitor',
      tags: ['DJ', 'Jazz'],
    },
    {
      title: 'Danny',
      description: 'AI powered bot',
      tags: ['DJ', 'Country', 'Blues'],
    },
    {
      title: 'Suresh',
      description: 'Classically trained singer',
      tags: ['DJ', 'Carnatic', 'Classical', 'Hip Hop'],
    },
    {
      title: 'Abdullah',
      description: 'Top 100 national rapper',
      tags: [
        'DJ', 
        'Rap',
        'Classical'
      ],
    },
    {
      title: 'Jane',
      description: 'Blues fanatic ',
      tags: [
        'DJ', 
        'Blues'
      ],
    },
    {
      title: 'Arielle',
      description: 'Country singer from Texas',
      tags: ['DJ', 'Country', 'Classical'],
    },
    {
      title: 'Shi Hun',
      description: 'Fire powered DJ',
      tags: [
        'DJ', 
        'Hip Hop',
        'Jazz'
      ],
    },
  ];

  const addTag = React.useCallback(
    (tag: string) => () => {
      if (!tags.includes(tag)) {
        return setTags((prevTags) => [...prevTags, tag]);
      }
    },
    [tags]
  );

  const deleteTag = React.useCallback(
    (tagId: string) => () => {
      const tagsFiltered = tags.filter((tag) => {
        return tag !== tagId;
      });
      setTags(tagsFiltered);
    },
    [tags]
  );

  const matchTags = (current: string | any[], target: any[]) => {
    return target.every((tag) => current.includes(tag));
  };

  return (
    <div className='tags-container'>
      <h2></h2>
      <h1 className='tag-filter'>Tags filtered</h1>
      <TagsInput value={tags} onChange={setTags} />

      <div className='tag-bank'>
      {allTags.map((tag) => {
                return (
                  <button
                    key={`add-button-${id}`}
                    type='button'
                    onClick={addTag(tag)}
                  >
                    #{tag}
                  </button>
                );
              })}
      </div>

      <div className= "DJ-container">
      {projects
        .filter((proj) => matchTags(proj.tags, tags))
        .map(({ title, description, tags }) => {
          return (
            <div key={`card-${id}`} className='card'>
              <div>
                <p>{title}</p>
                <p>{description}</p>
              </div>
              {tags.map((tag) => {
                return (
                  <button
                    key={`add-button-${id}`}
                    type='button'
                    onClick={addTag(tag)}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default About;

