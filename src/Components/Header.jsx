const Header = () => {
    const headerStyle =  {
        display : "flex",
        justifyContent : "space-between",
        // backgroundColor: "rgba(84, 76, 148, 0.149)",
        padding: '20px',
        borderBottom : '2px solid white'
    }

    const titleStyle = {
        // color : "black"
    }

    const ulStyle = {
        display : "flex",
    }

    const liStyle = {
        fontWeight : "bold",
        listStyleType : "none",
        padding : "20px"
    }
        
  
    return(
        <header style={headerStyle}>
            <h1 style={titleStyle}>First System</h1>
            <ul style={ulStyle}>
                <li style = {liStyle}>HOME</li>
                <li style = {liStyle}>HOME</li>
            </ul>
        </header>
    ) 

}
export default Header;