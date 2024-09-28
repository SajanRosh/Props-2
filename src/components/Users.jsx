function Users({name,img,profession}){
    return (
        <>
        <p className="bg-blue-100 text-blue-700 px-10 hidden text-center mt-4 rounded-lg py-2 absolute right-32" id="request">Request has sended</p>
            <div className="flex w-[400px] mx-auto mt-5 justify-between items-center bg-white px-5 py-2 rounded-lg">
                <div className="flex gap-4 items-center justify-center">
                    <img className="w-14 h-14 rounded-full object-cover" src={img} alt="" />
                    <div>
                        <p>{name}</p>
                        <p className="mt-0 text-xs text-neutral-700">{profession}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>{
                        // alert('Request has send')
                        let requestId = document.getElementById('request');
                        requestId.classList.remove('hidden')
                        setTimeout(()=>{requestId.classList.add('hidden')},1000)
                    }}>Follow</button>
                </div>
                
            </div>
            {/* <div className="bg-blue-300 text-blue-700 px-3 py-1 inline-block">
                Request has send
            </div> */}
        </>
    )
}

export default Users;