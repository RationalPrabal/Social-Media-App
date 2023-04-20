

export default function News({el}) {
  return (
    <a href={el.url} target="_blank">
<div className="flex items-center justify-between px-4 py-2 space-x-2 hover:bg-gray-200 transition duration-200">
    <div className="space-y-0.5">
<h6 className="text-sm font-bold">{el.title}</h6>
<p className="text-xs  font-medium text-gray-500">{el.source.name}</p>
    </div>
    <img className="w-[30%] rounded-xl" src={el.urlToImage} alt="image"/>
</div>
    </a>
  )
}
