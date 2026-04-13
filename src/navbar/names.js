const styles = {
    fontSize: '45px',
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20px'
};
const imageStyles = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    display: 'block',
    margin: '20px auto'
};

/*
const footerStyles = {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    textAlign: 'center',
    marginTop: '20px'
};
*/

const NavBar = () => {
    return (
        <>
        <h1 style={styles}>Hello there,I am Matsepe Kgodiso</h1>
        <h2>Aspiring Software Developer</h2>
        <p>I'm a passionate and dedicated software developer with a strong desire to create innovative solutions. With a solid foundation in programming languages such as JavaScript, Python, and Java, I have experience in developing web applications, mobile apps, and software solutions. I am constantly learning and staying up-to-date with the latest technologies to enhance my skills and deliver high-quality work. I am eager to contribute my knowledge and creativity to projects that make a positive impact.</p>  
        <p>Welcome to my portfolio</p>
        <img src='/images/image.png' alt='Matsepe Kgodiso' style={imageStyles}/>
        </>
    )
}

export default NavBar;



