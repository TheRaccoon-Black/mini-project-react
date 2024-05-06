const Feed = ({ title, link, date }) => {
    let formatted = { day: "numeric", month: "long", year: "numeric" };
    let articleDate = new Date(date);
    let formattedDate = new Intl.DateTimeFormat("en-GB", formatted).format(articleDate);
    return (
        <>
        <a href={link} target="blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <h3 className="text-xl mb-1 underline decoration-blue-400">{title}</h3>
            <p>{formattedDate}</p>
        </a>
        </>
    );
};

export default Feed;
