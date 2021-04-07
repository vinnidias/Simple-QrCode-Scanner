const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerScannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001435',
    alignSelf: 'center',
    margin: 10
  },

  qrCodeContainer: {
    height: 400,
    width: 360,
    justifyContent: 'space-around',
    alignSelf: 'center',
    padding: 50,
    backgroundColor: 'black'
  },

  buttonContainer: {
    height: 250,
    width: 360,
    justifyContent: 'space-around',
    alignSelf: 'center',
    padding: 50,
  },

  qrButton: {
    height: 60,
    width: 250,
    borderRadius: 5,
    padding: 20,
    backgroundColor: 'black'
  },

  textButton: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },

  loadingIcon: {
    alignSelf: 'center',
    height: 300,
    width: 210,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop: 60
  },

  adHeader:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },

  couponCard: { 
    backgroundColor: 'EFCADC',
    width: 300, 
    height: 450, 
    borderWidth: 1, 
    borderColor: 'grey', 
    borderRadius: 15, 
    alignItems: 'center', 
    padding: 25,
    marginBottom: 25
  }
};

export default styles