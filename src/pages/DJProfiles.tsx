import React, { useState, useEffect, useCallback } from "react";
import "./DJProfiles.css";
import TagsInput from "react-tagsinput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

type Project = {
  photo: string;
  title: string;
  description: string;
  hover_description: string;
  tags: string[];
};

const About: React.FC = () => {
  const [tags, setTags] = useState<string[]>(["DJ"]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentStartIndex, setCurrentStartIndex] = useState<number>(0);

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
            hover_description: obj.metadata.hover_description,
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
    target.every((tag) => current.tags.includes(tag) || current.title.toLowerCase() === tag.toLowerCase());

  const handleLeftClick = () => {
    const cardsPerScroll = window.innerWidth <= 768 ? 1 : 4; // Scroll by 1 for phone, 4 for larger screens
    if (currentStartIndex > 0) {
      setCurrentStartIndex((prevIndex) => Math.max(0, prevIndex - cardsPerScroll));
    }
  };
  
  const handleRightClick = () => {
    const cardsPerScroll = window.innerWidth <= 768 ? 1 : 4; // Scroll by 1 for phone, 4 for larger screens
    if (currentStartIndex + cardsPerScroll < projects.length) {
      setCurrentStartIndex((prevIndex) =>
        Math.min(projects.length - cardsPerScroll, prevIndex + cardsPerScroll)
      );
    }
  };

  const isLeftDisabled = currentStartIndex === 0;
  const isRightDisabled = currentStartIndex + 4 >= projects.length;

  return (
    <div className="tags-container">
      <div className="home-button">
        <a href="/" title="Go Home">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </a>
      </div>
      <TagsInput value={tags} onChange={setTags} />
      
      <div className="carousel-container">
        <button
          className={`carousel-arrow left-arrow ${
            isLeftDisabled ? "disabled" : ""
          }`}
          onClick={handleLeftClick}
          disabled={isLeftDisabled}
        >
          &#9664;
        </button>

        <div className="DJ-container">
  {projects
    .filter((proj) => matchTags(proj, tags))
    .slice(currentStartIndex, currentStartIndex + 4)
    .map(({ title, description, hover_description, photo, tags }, index) => (
      <div key={`card-${index}`} className="card">
        <div className="card-content">
          {photo && <img src={photo} alt={title} />}
          <p className="card-title">{title}</p>
          <p className="card-description">{description}</p>
          <div className="hover-description">{hover_description}</div>
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


        <button
          className={`carousel-arrow right-arrow ${
            isRightDisabled ? "disabled" : ""
          }`}
          onClick={handleRightClick}
          disabled={isRightDisabled}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default About;