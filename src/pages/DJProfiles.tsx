import React, { useState, useEffect, useCallback } from "react";
import "./DJProfiles.css";
import TagsInput from "react-tagsinput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

type Project = {
  photo: string;
  title: string;
  description: string;
  tags: string[];
};

const About: React.FC = () => {
  const [tags, setTags] = useState<string[]>(["DJ"]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(
      'https://api.cosmicjs.com/v3/buckets/bsr-production/objects?pretty=true&query=%7B%22type%22:%22user-profiles%22%7D&limit=10&read_key=DsCCqr1xYA6ByGkhlBdK7ws9fLwvNMVCHRi1yF6ENUFJwsf8jY&depth=1&props=slug,title,metadata,'
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.objects) {
          const formattedProjects: Project[] = data.objects.map((obj: any) => ({
            photo: obj.metadata.photo?.url || '',
            title: obj.title,
            description: obj.metadata.description,
            tags: obj.metadata.tags.data || [],
          }));
          setProjects(formattedProjects);
        }
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const addTag = useCallback(
    (tag: string) => () => {
      if (!tags.includes(tag)) {
        setTags((prevTags) => [...prevTags, tag]);
      }
    },
    [tags]
  );

  const matchTags = (current: Project, target: string[]) =>
    target.every((tag) =>
      current.tags.some((currentTag) => currentTag.toLowerCase() === tag.toLowerCase()) ||
      current.title.toLowerCase() === tag.toLowerCase()
    );

  return (
    <div className="tags-container">
      <div className="home-button">
        <a href="/" title="Go Home">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </a>
      </div>
      <TagsInput value={tags} onChange={setTags} />

      <div className="carousel-container">
        <div className="DJ-container">
          {projects
            .filter((proj) => matchTags(proj, tags))
            .map(({ title, description, photo, tags }, index) => (
              <div key={`card-${index}`} className="card">
                <div className="card-title">{title}</div>
                <div className="image-container">
                  {photo && <img src={photo} alt={title} />}
                  <div className="card-description">{description}</div>
                </div>
                <div className="card-tags">
                  {tags.map((tag) => (
                    <button
                      className="tag-button"
                      key={`add-button-${tag}-${index}`}
                      type="button"
                      onClick={addTag(tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
