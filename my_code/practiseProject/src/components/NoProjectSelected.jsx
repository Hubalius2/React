import NoProjectImage from '../assets/no-projects.png';
import Button from './button';

export default function NoProjectSelected({onStartAddProject}) {
    return(
        <div className="mt-12 text-center w-2/3">
            <img src={NoProjectImage} alt='An empty tast list' className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>
                No Project selected
            </h2>
            <p className='text-stone-400 mb-4'>
                Select a project or get started with a new one
            </p>
            <p>
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
        </div>
    );
}