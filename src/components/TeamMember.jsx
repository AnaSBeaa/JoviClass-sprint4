export default function TeamMember({ image, name, role }) {
    return (
        <article className="flex flex-col items-center text-center">
            <div className="w-40 h-40 shrink-0 overflow-hidden rounded-full border-[3px] border-[#9A48FF] bg-[#39027c]">
                <img src={image} alt={`Foto de ${name}`} className="block w-full h-full object-cover bg-[#39027c]" />
            </div>
            <h2 className="mt-4 mb-2 font-['Outfit'] font-bold text-[22px] text-white">{name}</h2>
            <ul className="m-0 p-0 list-none font-['Outfit'] font-normal text-base leading-[1.5] text-[#DDC4FB]">
                <li>{role}</li>
            </ul>
        </article>
    );
}
