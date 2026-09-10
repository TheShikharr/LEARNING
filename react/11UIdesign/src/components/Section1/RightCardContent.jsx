import { ArrowRight } from 'lucide-react';

function RightCardContent(props) {
    return (
        <div className="absolute top-0 left-0 h-full  w-full p-8 flex flex-col justify-between">
                <h2 className='bg-blue-50 rounded-full w-10 h-10 flex justify-center items-center text-xl p-6 font-bold'>{props.id+1}</h2>
                <div>
                    <p className='text-white mb-10 font-bold '>{props.intro}</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-500 rounded-3xl px-7 py-2 text-white font-semibold'>{props.tag}</button>
                        <button className='bg-blue-500 rounded-3xl px-3 py-2 text-white font-semibold'><ArrowRight /></button>
                    </div>
                </div>
            </div>
    )
}

export default RightCardContent
