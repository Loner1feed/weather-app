export const style = {
  plate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    background: 'rgba(255,255,255,0.1)',
    padding: '10px',
    borderRadius: '5px',
    h2: {
      margin: 0,
    }
  },

  deg: {
    fontSize: '74px',
    fontWeight: 'bold',
    lineHeight: '100%'
  },

  wrapper: {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
  },


  desc: {
    fontSize: '20px',
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '200px',
    // width: '100%',
    margin: '0px auto'
  }
}