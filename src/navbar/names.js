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

const footerStyles = {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    textAlign: 'center',
    marginTop: '20px'
};
const NavBar = () => {
    return (
        <>
        <h1 style={styles}>Hello there,I am Matsepe Kgodiso</h1>
        <h2>Aspiring Software Developer</h2>
        <p>Welcome to my portfolio</p>
        <img src='/images/image.png' alt='Matsepe Kgodiso' style={imageStyles}/>
        </>
    )
}

export default NavBar;



