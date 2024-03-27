
function Card({userName}){
   
   return(
      <figure className="md:flex bg-slate-400 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-4 mb-4">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg text-black font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-black dark:text-black">
        Sarah Dayan
      </div>
      <div className="text-blue-700 dark:text-blue-500">
       {userName}
      </div>
    </figcaption>
  </div>
</figure>
   )
}

export default Card;