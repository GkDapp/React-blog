import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ACF from '@ckeditor/ckeditor5-clipboard/src/clipboardfilter';

ClassicEditor.create(document.querySelector('#editor'), {
  plugins: [ACF],
  allowedContent: 'p b i u; a[href]',
  toolbar: ['bold', 'italic', 'underline', 'link']
});
