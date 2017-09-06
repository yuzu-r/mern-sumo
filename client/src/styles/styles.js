const styles = {
	textCenter: {
		textAlign:'center',
	},
	containerDiv: {
		border: '1px solid black',
		margin: '10px',
		padding: '3px 10px'
	},
	formDiv:{
		border: '1px dotted black',
		margin: '10px',
		padding: '5px 10px'
	},
	buttonAccordionTitle: {
    backgroundColor: '#eee',
    color: '#444',
    cursor: 'pointer',
    padding: '18px',
    marginBottom: '2px',
    width: '100%',
    border: 'none',
    textAlign: 'left',
    outline: 'none',
    fontSize: '18px',
    transition: '0.4s'
	},
	divAccordionPanel: {
    padding: '0 18px',
    backgroundColor: 'white',
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.2s ease-out'
	}
};
module.exports = styles;