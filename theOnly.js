const submitBtn = document.getElementById("submit");
const fillerText = document.getElementById("fillerText");
// const copyBtn = document.getElementById("copyBtn");
const textContainer = document.getElementById("textContainer");


//submitBtn.addEventListener('click', getFillerText);

var sScript = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet. Ornare suspendisse sed nisi lacus sed viverra tellus in. Erat imperdiet sed euismod nisi porta lorem. Ipsum a arcu cursus vitae congue mauris rhoncus. Platea dictumst vestibulum rhoncus est pellentesque. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Non odio euismod lacinia at quis risus. Enim blandit volutpat maecenas volutpat. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. At elementum eu facilisis sed odio morbi quis commodo odio. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Egestas diam in arcu cursus. Placerat in egestas erat imperdiet sed. Eu feugiat pretium nibh ipsum consequat. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Urna et pharetra pharetra massa massa ultricies mi quis. Vitae purus faucibus ornare suspendisse sed nisi lacus. Fermentum posuere urna nec tincidunt praesent. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Nisl purus in mollis nunc sed id semper. Nisi est sit amet facilisis magna etiam tempor. Elit eget gravida cum sociis natoque penatibus et magnis dis. Ullamcorper morbi tincidunt ornare massa eget. Ac auctor augue mauris augue neque gravida in fermentum et. Egestas dui id ornare arcu. Velit laoreet id donec ultrices tincidunt.Non arcu risus quis varius quam quisque id diam. Dis parturient montes nascetur ridiculus mus mauris vitae. Feugiat sed lectus vestibulum mattis ullamcorper. Fusce id velit ut tortor. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Fermentum et sollicitudin ac orci. Cursus euismod quis viverra nibh cras pulvinar. Enim tortor at auctor urna nunc. Eget mauris pharetra et ultrices neque. Ac ut consequat semper viverra nam libero justo. Est ante in nibh mauris. Integer eget aliquet nibh praesent tristique magna sit amet purus. Elementum nibh tellus molestie nunc non blandit. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Adipiscing elit pellentesque habitant morbi tristique senectus et netus.Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Ipsum suspendisse ultrices gravida dictum. Non odio euismod lacinia at quis risus sed. Praesent semper feugiat nibh sed pulvinar proin gravida. Sed turpis tincidunt id aliquet risus feugiat in. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Viverra aliquet eget sit amet tellus cras adipiscing. Bibendum at varius vel pharetra vel turpis nunc eget. Platea dictumst vestibulum rhoncus est pellentesque. Felis eget nunc lobortis mattis aliquam faucibus purus. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.Sed viverra ipsum nunc aliquet bibendum. Morbi tristique senectus et netus et malesuada fames ac. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Eget dolor morbi non arcu risus quis varius quam quisque. Rhoncus mattis rhoncus urna neque viverra justo nec. Augue neque gravida in fermentum et sollicitudin ac orci. Commodo quis imperdiet massa tincidunt nunc pulvinar. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Risus in hendrerit gravida rutrum quisque non tellus. Nulla facilisi etiam dignissim diam. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Et malesuada fames ac turpis egestas sed. Tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec nam aliquam sem et tortor consequat id porta. Viverra justo nec ultrices dui sapien eget mi."
var aScripts = sScript.split('.');
var aScriptsLength = aScripts.length;

$("#form").submit(function(e) {
    e.preventDefault();
});

function getFillerText(e) {
    const sentenceCountInput = document.getElementById("sentenceCount");
    var sentenceCount = sentenceCountInput.value;
    sentenceCount = parseInt(sentenceCount);

    var iStart = Math.floor((Math.random() * (70 - sentenceCount)) + 1);
    var sFiller = aScripts.slice(iStart, iStart + sentenceCount).join('.');
    fillerText.innerHTML = sFiller + ".";

    debugger;
}