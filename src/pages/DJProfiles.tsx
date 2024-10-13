import React from 'react';
import './DJProfiles.css';

const About: React.FC = () => {

  const [tags, setTags] = React.useState(["DJ"]);
  const id = React.useId();

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
      <h1 className='tag-filter'>Tags filtered</h1>
      <div>
        {tags.length > 0
          ? tags.map((tag) => {
              return (
                <button
                  key={`close-button-${id}`}
                  className='close'
                  onClick={deleteTag(tag)}
                >
                  {tag} &nbsp; x
                </button>
              );
            })
          : 'No tags selected'}
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
