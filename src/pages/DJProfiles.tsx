import React, { useState, useEffect, useCallback } from 'react';
import './DJProfiles.css';
import TagsInput from 'react-tagsinput';

type Project = {
  title: string;
  description: string;
  tags: string[];
};

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

const About: React.FC = () => {

  const [tags, setTags] = React.useState(["DJ"]);
  const [projects, setProjects] = useState<Project[]>([]);
  const id = React.useId();

  useEffect(() => {
    fetch('https://api.cosmicjs.com/v3/buckets/bsr-production/objects?pretty=true&query=%7B%22type%22:%22user-profiles%22%7D&limit=10&read_key=DsCCqr1xYA6ByGkhlBdK7ws9fLwvNMVCHRi1yF6ENUFJwsf8jY&depth=1&props=slug,title,metadata,')
      .then(response => response.json())
      .then(data => {
        if (data.objects) {
          const formattedProjects: Project[] = data.objects.map((obj: any) => ({
            title: obj.title,
            description: obj.metadata.description,
            tags: obj.metadata.tags.data
          }));
          setProjects(formattedProjects);
        }
      })
      .catch(error => console.error('Error fetching projects:', error));
  }, []);


  const addTag = useCallback(
    (tag: string) => () => {
      if (!tags.includes(tag)) {
        setTags((prevTags) => [...prevTags, tag]);
      }
    },
    [tags]
  );

  const deleteTag = useCallback(
    (tagId: string) => () => {
      const tagsFiltered = tags.filter((tag) => tag !== tagId);
      setTags(tagsFiltered);
    },
    [tags]
  );

  const matchTags = (current: string | any[], target: any[]) => {
    return target.every((tag) => current.includes(tag));
  };

  return (
    <div className='tags-container'>
      <h1 className='tag-filter'>Tags Filtered</h1>
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

      <div className="DJ-container">
        {projects
          .filter((proj) => matchTags(proj.tags, tags))
          .map(({ title, description, tags }, index) => (
            <div key={`card-${index}`} className='card'>
              <div>
                <p>{title}</p>
                <p>{description}</p>
              </div>
                {tags.map((tag) => (
                  <button
                  key={`add-button-${tag}-${index}`}
                  type='button'
                  onClick={addTag(tag)}
                  >
                      #{tag}
                </button>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};


export default About;