import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard/ExperienceCard';
import {experiences} from '../../data/constants';
import styles from './styles.module.scss'

const Experience = () => {
	return (
		 <div className={styles.container} id="experience">
			 <div className={styles.Wrapper}>
				 <div className={styles.Title}>Experience</div>
				 <div className={styles.desc}>
					 My work experience as a software engineer and working on different companies and projects.
				 </div>
				 <div className={styles.TimelineSection}>
					 <Timeline>
						 {experiences.map((experience, index) => (
								<TimelineItem>
									<TimelineSeparator>
										<TimelineDot variant="outlined" color="secondary"/>
										{index !== experiences.length - 1 && <TimelineConnector style={{background: '#854CE6'}}/>}
									</TimelineSeparator>
									<TimelineContent sx={{py: '12px', px: 2}}>
										<ExperienceCard experience={experience}/>
									</TimelineContent>
								</TimelineItem>
						 ))}
					 </Timeline>

				 </div>
			 </div>
		 </div>
	)
}

export default Experience
