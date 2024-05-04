const Feed = ({ title, link, date }) => {
    let formatted = { day: "numeric", month: "long", year: "numeric" };
    let articleDate = new Date(date);
    let formattedDate = new Intl.DateTimeFormat("en-GB", formatted).format(articleDate);
    return (
        <>
            <h3 className="text-xl mb-1">{title}</h3>
            <p>{formattedDate}</p>
        </>
    );
};

export default Feed;
