import React from 'react';

function Form() {
    return (
        <>
            <div className="m-5 w-auto h-[440px] rounded-2xl bg-slate-200 pt-[5vh]">
                <h1 className="text-center m-3 font-serif font-semibold">Add To List</h1>
                <div className="form flex h-[340px] justify-center align-middle m-3">

                    <form action="submit" className="justify-center bg-slate-200 ">
                        <input placeholder='UserId' className="text-center outline rounded-xl m-2 p-3" type="number" /><br />
                        <input placeholder='ID' className="text-center outline rounded-xl m-2 p-3" type="number" /><br />
                        <input placeholder='Title' className="text-center outline rounded-xl m-2 p-3" type="text" /><br />
                        <input placeholder='Complete' className="text-center outline rounded-xl m-2 p-3" type="number" /><br />
                        <center><button className="outline rounded-xl bg-blue-600 font-semibold font-serif cursor-pointer m-2 p-3" type="submit">Submit</button></center>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;