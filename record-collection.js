// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
/*
records = recordCollection
id = ref number
prop = album title, artist, or tracks[]
value = the value of the prop (album name, etc)
have to check if the prop currently exists */
function updateRecords(records, id, prop, value) {
  if(value == ""){
    delete records[id][prop];
    return records;
    // if string is empty, delete the property
    // return records
  }
  else if(prop == "albumTitle"){
    if(records[id].hasOwnProperty("albumTitle") == true){
      records[id][prop] = value;
      return records;
      /* if the record already has an album title prop, let that prop = value given, then return records */
    }
    else{
      records[id][prop] = value;
      return records;
      /* if the prop doesn't already exist, set albumTitle=the prop value given then return records*/
    }
  }
  else if(prop == "artist"){
    if(records[id].hasOwnProperty("artist") == true){
      records[id][prop] = value;
      return records;
    }
    else{
      records[id][prop] = value;
      return records;
    }
  }
  else if(prop == "tracks"){
    if(records[id].hasOwnProperty("tracks") == true){
      records[id][prop].push(value);
      return records;
    }
    else{
      records[id][prop] = [value];
      return records;
  /* need to make sure we're doing this for an array
  should it be
  const tracks = [records[id][prop][value] = "value"] */
    }
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
