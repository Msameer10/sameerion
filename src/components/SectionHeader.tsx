export const SectionHeader = ({
    title,
    opening,
    description,
}: {
    title:string;
    opening:string;
    description:string;
}) => {
    return(
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-600 to-rose-600 text-transparent bg-clip-text text-center">{opening}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/70 mt-4 max-w-md mx-auto">{description}</p>
        </>
    )
}