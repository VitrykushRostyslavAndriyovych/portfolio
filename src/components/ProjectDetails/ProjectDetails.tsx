// import {CloseRounded} from '@mui/icons-material';
// import {Modal} from '@mui/material';
import styles from './styles.module.scss'
import {AwaitedReactNode, FC, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal} from 'react';
import Image from 'next/image';
import {AppComponent} from '@/components/Wrapper/Wrapper';

interface InterfaceProjectDetails {
	openModal: AppComponent
	setOpenModal: (openModal: AppComponent) => void
}

const ProjectDetails: FC<InterfaceProjectDetails> = ({openModal, setOpenModal}) => {
	const project = openModal?.project;
	return (
		 // <Modal open={true} onClose={() => setOpenModal({state: false, project: null})}>
		 <div className={styles.Container}>
			 <div className={styles.Wrapper}>
				 {/*<CloseRounded*/}
				 {/*	style={{*/}
				 {/*		position: 'absolute',*/}
				 {/*		top: '10px',*/}
				 {/*		right: '20px',*/}
				 {/*		cursor: 'pointer',*/}
				 {/*	}}*/}
				 {/*	onClick={() => setOpenModal({state: false, project: null})}*/}
				 {/*/>*/}
				 <Image width={100} height={100} className={styles.Image} src={`${project?.image}`}
				        alt={`${project?.title}`}/>
				 <div className={styles.Title}>{project?.title}</div>
				 <div className={styles.Date}>{project?.date}</div>
				 <div className={styles.Tags}>
					 {project?.tags.map((tag: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
							<div key={index} className={styles.Tag}>{tag}</div>
					 ))}
				 </div>
				 <div className={styles.Desc}>{project?.description}</div>
				 <div className={styles.ButtonGroup}>
					 <a className={styles.Button} href={project?.github} target="new">View Code</a>
					 {project?.webapp && <a className={styles.Button} href={project?.webapp} target="new">View Live App</a>}
				 </div>
			 </div>
		 </div>

		 // </Modal>
	)
}

export default ProjectDetails