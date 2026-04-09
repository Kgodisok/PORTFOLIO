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

const NavBar = () => {
    return (
        <>
        <h1 style={styles}>Hello there, Matsepe Kgodiso</h1>
        <p>Welcome to my portfolio</p>
        <img src='/images/image.png' alt='Profile Photo' style={imageStyles}/>
        </>
    )
}





export default NavBar;



