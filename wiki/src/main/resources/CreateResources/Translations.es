<?xml version="1.0" encoding="UTF-8"?>

<xwikidoc>
<web>CreateResources</web>
<name>Translations</name>
<language>es</language>
<defaultLanguage></defaultLanguage>
<translation>1</translation>
<parent></parent>
<creator>XWiki.ShermanTank</creator>
<author>XWiki.ShermanTank</author>
<customClass></customClass>
<contentAuthor>XWiki.ShermanTank</contentAuthor>
<creationDate>1229981021000</creationDate>
<date>1229981021000</date>
<contentUpdateDate>1234995980000</contentUpdateDate>
<version>1.1</version>
<title></title>
<template></template>
<defaultTemplate></defaultTemplate>
<validationScript></validationScript>
<comment></comment>
<minorEdit>false</minorEdit>
<syntaxId>xwiki/1.0</syntaxId>
<object>
<class>
<name>XWiki.TagClass</name>
<customClass></customClass>
<customMapping></customMapping>
<defaultViewSheet></defaultViewSheet>
<defaultEditSheet></defaultEditSheet>
<defaultWeb></defaultWeb>
<nameField></nameField>
<validationScript></validationScript>
<tags>
<cache>0</cache>
<displayType>select</displayType>
<multiSelect>1</multiSelect>
<name>tags</name>
<number>1</number>
<prettyName>Tags</prettyName>
<relationalStorage>1</relationalStorage>
<separator> </separator>
<separators> ,|</separators>
<size>30</size>
<unmodifiable>0</unmodifiable>
<values></values>
<classType>com.xpn.xwiki.objects.classes.StaticListClass</classType>
</tags>
</class>
<name>CreateResources.Translations</name>
<number>0</number>
<className>XWiki.TagClass</className>
<property>
<tags/>
</property>
</object>
<content>## from http://next.dev.curriki.org/xwiki/bin/edit/CreateResources/Translations?editor=wiki
{pre}

## If a string has the word "placeholder" after the = sign, it means text is coming. If it is blank after the = sign, then that means that that string can be ignored until further notice.

## TABLE OF CONTENTS FOR THIS DOCUMENT AS OF AUGUST 11 2008:

## FORM ACCESS WARNING
## GLOBAL ELEMENTS USED IN MORE THAN ONE FORM
## GLOBAL REQUIRED FIELDS WARNING
## LEAVING FORM DIALOG
## CREATE A RESOURCE FROM SCRATCH FORM
## CURRIKI LESSON PLAN FORM
## NORTEL LEARNIT LESSON PLAN FORM
## ACE LESSON PLAN FORM
## FROM SCRATCH ERROR MESSAGES
## LESSON PLAN ERROR MESSAGES
## GLOBAL SET REQUIRED INFORMATION MODULE CONTENT
## ASSET CLASS
## ADD PATH SELECTION DIALOGS
## ADD PATH FINAL MESSAGE DIALOGS
## ADD PATH ERROR MESSAGE



## TRANS CONTENT BEGINS HERE:


## FORM ACCESS WARNING
createresources.needaccount= Usted debe ser un miembro de Curriki y haber &lt;a href="{0}"&gt;iniciado una sesión&lt;/a&gt; para crear nuevos recursos.



## GLOBAL ELEMENTS USED IN MORE THAN ONE FORM

## STEP 3
form.scratch.step3.header= Paso 3. Confirmación de derechos e información de acceso
form.scratch.step3.instruction= ¿De quién es este contenido, quién debería ser capaz de verlo y editarlo, y cómo puede ser usado por otras personas?

## STEP 4 (used in From Scratch, CSLP, and NLLP forms; partial use in ACELP)
form.scratch.step4.header= Paso 4. Revisar y Enviar
form.scratch.step4.instruction= Revise su trabajo una vez más antes de hacer clic en Enviar. &lt;br /&gt; &lt;br /&gt;Si su contenido &lt;i&gt;no está listo&lt;/i&gt; para que otros lo vean o usen, recuerde dejar los privilegios de acceso a "Privado" más arriba.

form.scratch.submit.button= Enviar
form.scratch.cancel.button= Cancelar

## GENERIC REQUIRED FIELDS WARNING
form.required.fields.instruction= Los datos con &lt;em style="color: red;"&gt;!&lt;/em&gt; son necesarios.
form.required.fields.indicator= !


## LEAVING FORM DIALOG
form.leaving.dialog= Si sale de esta página se perderá su trabajo
form.leaving.dialog.ok.button= OK
form.leaving.dialog.cancel.button= Cancelar

## DONE CREATING A RESOURCE FORM 
form.done.url= /xwiki/bin/view/CreateResources/AssetDone
form.done.created.lessonplan= ¡Plan de lección creado!
form.done.created.resource= ¡Recurso creado!
## Next string need not be translated... if what follows is ever seen by user, a severe error has occurred: 
form.done.wysiwyg.error.wikitext= 1 Error: SLP Wysiwyg Badness!

## CREATE A RESOURCE FROM SCRATCH FORM

form.scratch.url= /xwiki/bin/view/CreateResources/SimpleWikiResource
form.scratch.title= Crear un recurso "a partir de cero" (Documento Wiki simple)
form.scratch.title.description= ¿No está seguro de qué es esto? Para saber más:
form.title.description.link1= Muestras
form.title.description.link1.url= /xwiki/bin/view/Coll_curriki/SampleWikiResources?bc=;Coll_curriki.SampleModelResourcesCreatedUsingForms
form.title.description.link3= Ayuda
form.title.description.link3.url= /xwiki/bin/view/Coll_curriki/CreatingResourceswithFormsTemplates?bc=;Coll_curriki.CurrikiHelp
form.title.description.link2= Sistema de revisión de Curriki
form.title.description.link2.url= /xwiki/bin/view/Coll_curriki/CurrikiReviewSystemCollection?bc=XWiki.curriki
form.title.description.link2.thumbnail= /xwiki/skins/curriki8/icons/CRS.png

## FROM SCRATCH STEP 1
form.scratch.step1.header= Paso 1. Introducción de información básica.
form.scratch.step1.instruction= ¿Qué características describirán y presentarán mejor este recurso en los resultados de búsquedas&lt;br&gt;y otras listas?

form.scratch.title_title= Título:
form.scratch.title_txt= Escriba un título para su recurso de menos de 250 caracteres (incluyendo espacios)
form.scratch.title_tooltip= El título del recurso aparece en los resultados de las búsquedas y otras listas, y ayuda a que otros usuarios identifiquen su utilidad o aplicación.

form.scratch.description_title= Descripción:
form.scratch.description_txt= Escriba una descripción detallada del contenido y/o propósito de este recurso.
form.scratch.description_tooltip= Si este recurso es parte de un contexto instruccional mayor, aquí puede describir esta relación.

## FROM SCRATCH STEP 2
form.scratch.step2.header= Paso 2. Introducción y formateo del contenido.
form.scratch.step2.instruction= ¿Cuál es el contenido de su recurso?
form.scratch.step2.content.title= Contenido:
form.scratch.step2.content.instruction= Escriba el contenido en la ventana de edición que aparece más abajo. Dé formato a su material usando los botones en la &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_curriki/UsingtheEditingToolbar?bc=;Coll_curriki.CurrikiHelp;Coll_curriki.TheCurrikulumBuilder" target="_blank"&gt;barra de edición&lt;/a&gt;.



## CURRIKI LESSON PLAN (CSLP) FORM

## CSLP TITLE AREA

lesson.plan.url= /xwiki/bin/view/CreateResources/CurrikiStandardLessonPlan
lesson.plan.title= Cree un recurso a partir de una plantilla (Plan de lección estándar de Curriki)
lesson.plan.title.description= Para saber más:

lesson.plan.title.description.link1= Modelos
lesson.plan.title.description.link1.url= http://www.curriki.org/xwiki/bin/view/Coll_curriki/ModelLessonsfromCurrikisForm-BasedTemplate
lesson.plan.title.description.link3= Ayuda
lesson.plan.title.description.link3.url= /xwiki/bin/view/Coll_curriki/CreatingResourceswithFormsTemplates?bc=;Coll_curriki.CurrikiHelp
lesson.plan.title.description.link2= Sistema de Revisión de Curriki
lesson.plan.title.description.link2.url= /xwiki/bin/view/Coll_curriki/CurrikiReviewSystemCollection?bc=XWiki.curriki
lesson.plan.title.description.link2.thumbnail= /xwiki/skins/curriki8/icons/CRS.png

## CSLP STEP 1
lesson.plan.step1.header= Paso 1. Introducción de información básica.
lesson.plan.step1.instruction= ¿Cómo describiría y clasificaría este recurso de cara a&lt;br&gt;otros educadores?

lesson.plan.title_title= Título:
lesson.plan.title_txt= Escriba un título para su lección de no más de 250 caracteres (incluyendo espacios)
lesson.plan.title_tooltip= Este título se mostrará en listados (como resultados de búsquedas) y debería ayudar a otros usuarios para identificarlo rápidamente.

lesson.plan.description_title= Descripción:
lesson.plan.description_txt= Describa los conceptos generales y capacidades usadas en esta lección, y/o los objetivos de la lección o actividad.
lesson.plan.description_tooltip= Si esta lección es parte de un contexto instruccional mayor, aquí puede describir esta relación.

##CSLP STEP 2
lesson.plan.step2.header= Paso 2. Introducción y formateo del contenido de la lección
lesson.plan.step2.instruction= ¿Qué debería hacer otro educador para poner &lt;br&gt;en práctica esta lección?

lesson.plan.introduction.title= Introducción:
lesson.plan.introduction.instruction= 
lesson.plan.introduction.content= 
lesson.plan.introduction.tooltip= ¿Cuál es el contenido de esta lección? ¿Cuáles son los prerequisitos de conocimientos o habilidades de los estudiantes? ¿Cuánto tiempo requiere?

lesson.plan.group.size.title= Tamaño del grupo:
lesson.plan.group.size.instruction= 
lesson.plan.group.size.content1= Cualquiera
lesson.plan.group.size.content2= Toda la clase
lesson.plan.group.size.content3= Grupos pequeños
lesson.plan.group.size.content4= Parejas
lesson.plan.group.size.content5= Estudiantes independientes
lesson.plan.group.size.tooltip= ¿Cuál es la composición ideal de estudiantes para esta lección?

lesson.plan.learning.objectives.title= Objetivos de aprendizaje:
lesson.plan.learning.objectives.instruction= Explique qué es lo que los estudiantes deberían saber y ser capaces de hacer al acabar la lección.
lesson.plan.learning.objectives.content= 
lesson.plan.learning.objectives.tooltip= ¿Qué deberían saber y ser capaces de hacer los estudiantes después de completar esta lección?

lesson.plan.guiding.question.title= Preguntas para guiar:
lesson.plan.guiding.question.instruction= 
lesson.plan.guiding.question.content= 
lesson.plan.guiding.question.tooltip= ¿Qué preguntas clave compartirás con los estudiantes para guiar sus discusiones y esfuerzos en esta lección?

lesson.plan.materials.title= Materiales:
lesson.plan.materials.instruction= 
lesson.plan.materials.content= 
lesson.plan.materials.tooltip= ¿Qué suministros, libros, equipo especial, software, u otros materiales son necesarios para esta lección?

lesson.plan.procedures.title= Procedimientos:
lesson.plan.procedures.instruction= Escriba los procedimientos de la lección en la ventana de edición mostrada más abajo. Dé formato a su material usando los botones de la &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_curriki/UsingtheEditingToolbar?bc=;Coll_curriki.CurrikiHelp;Coll_curriki.TheCurrikulumBuilder" target="_blank"&gt;barra de edición&lt;/a&gt;.
lesson.plan.procedures.content= 
lesson.plan.procedures.tooltip= ¿Qué instrucciones puede proporcionar a otros educadores para que puedan llevar a cabo la instrucción planeada durante la lección?

lesson.plan.assessment.title= Evaluación:
lesson.plan.assessment.instruction= Describa cómo evaluar los conocimientos adquiridos en la lección. 
lesson.plan.assessment.content= 
lesson.plan.assessment.tooltip= ¿Cómo se puede evaluar el nuevo conocimiento y capacidades de los estudiantes?

lesson.plan.answer.key.title= Solucionario o instrucciones de evaluación:
lesson.plan.answer.key.instruction= Escriba en este espacio las respuestas válidas, o instrucciones para evaluar una respuesta, creando una tabla con la &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_curriki/UsingtheEditingToolbar?bc=;Coll_curriki.CurrikiHelp;Coll_curriki.TheCurrikulumBuilder" target="_blank"&gt;barra de edición&lt;/a&gt;.
lesson.plan.answer.key.content= 
lesson.plan.answer.key.tooltip= ¿Qué criterios se pueden usar para aclarar las expectativas de los estudiantes o para cuantificar la evaluación?

lesson.plan.standards.title= Referencias y estándares:
lesson.plan.standards.instruction= 
lesson.plan.standards.content= 
lesson.plan.standards.tooltip= ¿A qué estándares (exámenes oficiales, cursos, planes de estudio, etc.) se dirige la lección, y en qué contexto?

lesson.plan.required.attachments.title= Anexos requeridos:
lesson.plan.required.attachments.instruction= Seleccione y suba ficheros de su ordenador. Los ficheros anexos no pueden tener más de 20MB. Estos ficheros se ofrecerán como enlaces desde el plan de lección publicado.
lesson.plan.required.attachments.file.attached= Los ficheros que una a este recurso no aparecerán como contribuciones independientes en Curriki; sólo se mostrarán como enlaces dentro de este recurso, y están sujetos a la licencia de este recurso. &lt;br /&gt;&lt;br /&gt;Después de enviar este formulario, considere por favor la posibilidad de añadir estos materiales a Curriki como recursos independientes, de forma que estas contribuciones puedan ser descubiertas y reusadas con mayor facilidad.
lesson.plan.attachments.title= Ficheros anexos:
lesson.plan.required.attachments.tooltip= Añada cualquier fichero referenciado en la lección, ya sean soluciones, entregables, exámenes, u otros.
lesson.plan.attachments.browse.button= Buscar
lesson.plan.attachments.attach.button= Añadir este fichero
lesson.plan.attachments.delete= Borrar
lesson.plan.file.size.maximum= 20000000
lesson.plan.file.size.label= Tamaño total de todos los anexos juntos:
lesson.plan.file.size.oversize= Los anexos de este recurso no pueden sumar más de 20MB. Para guardar este recurso, debe utilizar alguno de los enlaces "Borrar" para reducir el tamaño total de los anexos. Recuerde que puede subir cualquier fichero adicional como recurso independiente en vez de añadirlo a este recurso.
lesson.plan.file.size.dialog= Los anexos de este recurso no pueden sumar más de 20MB. Recuerde que puede subir este fichero como un recurso independiente, en vez de como anexo de un recurso.
lesson.plan.file.size.dialog.button= OK


##NORTEL LEARNIT (NLLP) LESSON PLAN FORM

##NLLP TITLE AREA

nortel.lesson.plan.url= /xwiki/bin/view/CreateResources/NortelLearniTLessonPlan
nortel.lesson.plan.title= Crear un plan de lección (Plantilla Nortel LearniT 6E + S)
nortel.lesson.plan.title.description= &lt;br&gt;Para saber más:

nortel.form.title.description.link1= Modelos
nortel.form.title.description.link1.url= http://www.curriki.org/xwiki/bin/view/Coll_curriki/ModelLessonsfromNortelLearniTs6ETemplate?bc=;Coll_NortelLearniT.NortelLearniT6ESForm
nortel.form.title.description.link2= Ayuda detallado sobre el uso del formulario
nortel.form.title.description.link2.url= http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/NortelLearniT6ESForm?bc
nortel.form.title.description.link3= Nortel LearniT
nortel.form.title.description.link3.url= http://www.curriki.org/xwiki/bin/view/Demo/nortellearnit
nortel.form.title.description.link4= Sobre los planes de lecciones de 6E + S
nortel.form.title.description.link4.url= http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/6eslessonplan?bc=;Coll_NortelLearniT.NortelLearniT6ESForm



##NLLP STEP 1
nortel.lesson.plan.title_title= Título:
nortel.lesson.plan.title_txt= marcador
nortel.lesson.plan.title_tooltip= marcador

nortel.lesson.plan.description_title= Descripción:
nortel.lesson.plan.description_txt= marcador

nortel.lesson.plan.description_tooltip= marcador


##NLLP STEP 2

nortel.lesson.plan.step2.title= Escribir y dar formato al contenido de la lección
nortel.lesson.plan.step2.guidingquestion= ¿Qué necesitaría saber otro educador para poner en práctiva esta lección con éxito?

nortel.lesson.plan.overview.title= Resumen:
nortel.lesson.plan.overview.instruction= 
nortel.lesson.plan.overview.content= 
nortel.lesson.plan.overview.tooltip= Escriba una descripción básica de la lección. Incluya breves objetivos de aprendizaje y formatos de proyectos para los estudiantes.

nortel.lesson.plan.techinteg.title= Tecnologías integradas:
nortel.lesson.plan.techinteg.instruction= 
nortel.lesson.plan.techinteg.content= 
nortel.lesson.plan.techinteg.tooltip= Indique los medios o tecnologías que usarán los estudiantes, como presentaciones, cámaras digitales, etc., para explorar o demostrar el conocimiento de los objetivos.

nortel.lesson.plan.prereq.title= Prerequisitos de experiencia:
nortel.lesson.plan.prereq.instruction= 
nortel.lesson.plan.prereq.content= 
nortel.lesson.plan.prereq.tooltip= ¿Qué conocimientos o capacidades (como Powerpoint) necesitan los estudiantes y el profesor?

nortel.lesson.plan.preptime.title= Tiempo de preparación del profesor:
nortel.lesson.plan.preptime.instruction= 
nortel.lesson.plan.preptime.content= 
nortel.lesson.plan.preptime.tooltip= Indique el tiempo necesario para la coordinación y otras operaciones que se tienen que hacer antes de la lección.

nortel.lesson.plan.timecomplete.title= Tiempo estimado de realización:
nortel.lesson.plan.timecomplete.instruction= 
nortel.lesson.plan.timecomplete.content= 
nortel.lesson.plan.timecomplete.tooltip= Escriba el tiempo requerido para toda la lección.

nortel.lesson.plan.materials.title= Materiales:
nortel.lesson.plan.materials.instruction= 
nortel.lesson.plan.materials.content= 
nortel.lesson.plan.materials.tooltip= Detalle los suministros, entregables, equipo, software, libros, y otros materiales necesarios para llevar a cabo la lección.

nortel.lesson.plan.project.title= Proyecto:
nortel.lesson.plan.project.instruction= 
nortel.lesson.plan.project.content= 
nortel.lesson.plan.project.tooltip= Describa los proyectos de los estudiantes con cierto detalle, incluyendo cómo deben buscar y presentar la información.

nortel.lesson.plan.timemanagement.title= Pistas sobre manejo del tiempo:
nortel.lesson.plan.timemanagement.instruction= 
nortel.lesson.plan.timemanagement.content= 
nortel.lesson.plan.timemanagement.tooltip= Proporcione pistas sobre cómo controlar el ritmo de la lección.

nortel.lesson.plan.assess.title= Evaluación:
nortel.lesson.plan.assess.instruction= 
nortel.lesson.plan.assess.content= 
nortel.lesson.plan.assess.tooltip= Indique brevemente las técnicas de evaluación. Nota: use Evaluar para crear guías de evaluación detalladas.

nortel.lesson.plan.engage.title= Captura de interés:
nortel.lesson.plan.engage.instruction= Escriba y dé formato a su material usando la barra de edición. &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/NortelLearniTUsingtheWhatYouSeeIsWhatYouGetWYSIWYGEditingToolbar?bc=;Coll_NortelLearniT.NortelLearniT6ESForm" target="_blank"&gt;Ayuda de la barra de edición&lt;/a&gt;. Vea un video sobre la View a video on &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/21eTeacherIntroductionEngage" target="_blank"&gt;captura del interés&lt;/a&gt;. 
nortel.lesson.plan.engage.content= 
nortel.lesson.plan.engage.tooltip= Indique actividades específicas para capturar el interés de los estudiantes y animarles a que se hagan preguntas que les guíen en la exploración.

nortel.lesson.plan.explore.title= Explorar:
nortel.lesson.plan.explore.instruction= Introduzca su material y déle formato usando la barra de edición. &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/NortelLearniTUsingtheWhatYouSeeIsWhatYouGetWYSIWYGEditingToolbar?bc=;Coll_NortelLearniT.NortelLearniT6ESForm" target="_blank"&gt;Ayuda de la barra de edición&lt;/a&gt;. Vea un video sobre &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/21eTeacherExplore" target="_blank"&gt;Exploración&lt;/a&gt;. 
nortel.lesson.plan.explore.content= 
nortel.lesson.plan.explore.tooltip= Indique las actividades y tecnologías necesarias que los estudiantes deben hacer/usar para investigar el tema de la lección.

nortel.lesson.plan.explain.title= Explicar:
nortel.lesson.plan.explain.instruction= Introduzca su material y déle formato usando la barra de edición. &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/NortelLearniTUsingtheWhatYouSeeIsWhatYouGetWYSIWYGEditingToolbar?bc=;Coll_NortelLearniT.NortelLearniT6ESForm" target="_blank"&gt;Ayuda de la barra de edición&lt;/a&gt;. Vea un video sobre &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/21eTeacherExplain" target="_blank"&gt;Explicación&lt;/a&gt;. 
nortel.lesson.plan.explain.content= 
nortel.lesson.plan.explain.tooltip= Indique las presentaciones o producción y formatos que los estudiantes harán y usarán para demostrar el nuevo conocimiento, entendimiento y capacidades.

nortel.lesson.plan.elaborate.title= Elaborar:
nortel.lesson.plan.elaborate.instruction= Introduzca su material y déle formato usando la barra de edición. &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/NortelLearniTUsingtheWhatYouSeeIsWhatYouGetWYSIWYGEditingToolbar?bc=;Coll_NortelLearniT.NortelLearniT6ESForm" target="_blank"&gt;Ayuda de la barra de edición&lt;/a&gt;. Vea un video sobre &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/21eTeacherElaborate" target="_blank"&gt;Elaborar&lt;/a&gt;. 
nortel.lesson.plan.elaborate.content= 
nortel.lesson.plan.elaborate.tooltip= Proporcione instrucciones sobre el proyecto específico que el estudiante crea a partir de la actividad del plan de lección.

nortel.lesson.plan.evaluate.title= Evaluar:
nortel.lesson.plan.evaluate.instruction= Introduzca su material y déle formato usando la barra de edición. &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/NortelLearniTUsingtheWhatYouSeeIsWhatYouGetWYSIWYGEditingToolbar?bc=;Coll_NortelLearniT.NortelLearniT6ESForm" target="_blank"&gt;Ayuda de la barra de edición&lt;/a&gt;. Vea un video sobre &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/Evaluate" target="_blank"&gt;Evaluar&lt;/a&gt;. 
nortel.lesson.plan.evaluate.content= 
nortel.lesson.plan.evaluate.tooltip= Proporcione/describa la solución/método de evaluar el aprendizaje de los estudiantes según la expresión de sus actividades/producción.

nortel.lesson.plan.extend.title= Extender:
nortel.lesson.plan.extend.instruction= Introduzca su material y déle formato usando la barra de edición. &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/NortelLearniTUsingtheWhatYouSeeIsWhatYouGetWYSIWYGEditingToolbar?bc=;Coll_NortelLearniT.NortelLearniT6ESForm" target="_blank"&gt;Ayuda de la barra de edición&lt;/a&gt;. Vea un video sobre &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/21eTeacherExtend" target="_blank"&gt;Extender&lt;/a&gt;. 
nortel.lesson.plan.extend.content= 
nortel.lesson.plan.extend.tooltip= Indique algunas formas conducidas por el estudiante en que se puede extender la investigación, comunicar sus descubrimientos a otros estudiantes, y aplicar el conocimiento adquirido a otras circunstancias.

nortel.lesson.plan.standards.title= Estándares:
nortel.lesson.plan.standards.instruction= Introduzca su material y déle formato usando la barra de edición. &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/NortelLearniTUsingtheWhatYouSeeIsWhatYouGetWYSIWYGEditingToolbar?bc=;Coll_NortelLearniT.NortelLearniT6ESForm" target="_blank"&gt;Ayuda de la barra de edición&lt;/a&gt;. Vea un video sobre &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_NortelLearniT/21eTeacherStandards" target="_blank"&gt;Stándares&lt;/a&gt;. 
nortel.lesson.plan.standards.content= 
nortel.lesson.plan.standards.tooltip= Indique los estándares/esquemas con los que se relaciona la lección.

nortel.lesson.plan.required.attachments.title= Anexos requeridos:
nortel.lesson.plan.required.attachments.instruction= Selecciones y suba ficheros desde su ordenador. Los ficheros anexos no pueden exceder un total de 20MB. Estos ficheros se ofrecerán como enlaces desde el plan de lección publicado.
nortel.lesson.plan.required.attachments.tooltip= Añada los ficheros referenciados en la lección, como entregables, solucionarios, exámenes, etc.
nortel.lesson.plan.required.attachments.file.attached= Los ficheros que se añaden a este recurso no aparecerán como contribuciones independientes en Curriki; se presentarán sólo como enlaces desde dentro de este recurso, y están cubiertos por la misma licencia que este recurso. &lt;br /&gt;&lt;br /&gt; Después de enviar este formulario, considere la opción de añadir estos materiales a Curriki como recursos independientes, de forma que sean más fáciles de descubrir y reusar.
nortel.lesson.plan.required.attachments.browse.button= Buscar
nortel.lesson.plan.required.attachments.attach.button= Añadir este fichero
nortel.lesson.plan.required.attachments.delete= Borrar

## NLLP OUTPUT

## see macros.vm: macro currikiNortelIcon()
nortel.lesson.plan.output.heading.icon.url= /xwiki/bin/download/CreateResources/NortelLearniTLessonPlan/NlorgCurrikiHP.png
nortel.lesson.plan.output.heading.icon.height= 75
nortel.lesson.plan.output.heading.icon.width= 225
nortel.lesson.plan.output.heading.content= Esta lección fue creada usando la plantilla de Nortel LearniT 6E + S para la integración de tecnologías en planes de estudio.

## ACE LESSON PLAN FORM

## ACELP TITLE AREA
ace.lesson.plan.url= /xwiki/bin/view/CreateResources/ACELessonPlan
ace.lesson.plan.title= Crear un recurso a partir de una plantilla (Plan de lección ACE)
ace.lesson.plan.title.description= Para saber más:

ace.lesson.plan.title.description.link1= Models
ace.lesson.plan.title.description.link1.url= http://www.curriki.org/xwiki/bin/view/Coll_curriki/ModelLessonsfromCurrikisForm-BasedTemplate
ace.lesson.plan.title.description.link3= Help
ace.lesson.plan.title.description.link3.url= /xwiki/bin/view/Coll_curriki/CreatingResourceswithFormsTemplates?bc=;Coll_curriki.CurrikiHelp
ace.lesson.plan.title.description.link2= ACE
ace.lesson.plan.title.description.link2.url= 
ace.lesson.plan.title.description.link2.thumbnail.url= http://www.curriki.org/xwiki/bin/view/Demo/ace
ace.lesson.plan.title.description.link2.thumbnail= 

## ACELP STEP 1
ace.lesson.plan.step1.header= Paso 1. Introducción de información básica.
ace.lesson.plan.step1.instruction= ¿Cómo describiría y clasificaría esta lección de cara a usted mismo&lt;br&gt;y otros educadores?

ace.lesson.plan.title_title= título:
ace.lesson.plan.title_txt= Escriba un título para su lección de menos de 250 caracteres (incluyendo espacios).
ace.lesson.plan.title_tooltip= Este título se muestra en listados (como resultados de búsquedas) y debería ayudar a otros usuarios a identificar rápidamente el recurso.

ace.lesson.plan.description_title= Descripción:
ace.lesson.plan.description_txt= Describa los conceptos generales y habilidades usadas o referenciadas en esta lección, y/o las principales actividades de aprendizaje.
ace.lesson.plan.description_tooltip= Si esta lección es parte de una unidad instruccional mayor, puede describir aquí esta relación.

## ACELP STEP 2

ace.lesson.plan.step2.header= Paso 2. Introducción del contenido y formato de la lección
ace.lesson.plan.step2.instruction= ¿Qué debería saber otro educador para poner en práctica &lt;br&gt;con éxito esta lección?

##CORRECT DISPLAY STRINGS FOR NUMBER OF DAYS
ace.lesson.plan.introduction.title= Número de días:
ace.lesson.plan.introduction.instruction= Introduzca el número estimado de días que usarán los estudiantes para conseguir los objetivos del plan de lección.
ace.lesson.plan.introduction.content= 
ace.lesson.plan.introduction.tooltip= Los planes de lección que duran entre 2 y 4 días ayudan a los estudiantes a enmarcar ideas y habilidades concretas dentro de conceptos más grandes y complejos.

ace.lesson.plan.number.days.title= Número de días:

##CORRECT DISPLAY STRINGS FOR PRIOR KNOWLEDGE
ace.lesson.plan.group.size.title= Conocimiento previo:
ace.lesson.plan.group.size.instruction= Describa qué es lo que los estudiantes necesitan saber y ser capaces de hacer para poder participar en las tareas y métodos de este plan de lección.
ace.lesson.plan.group.size.content= 
ace.lesson.plan.group.size.tooltip= marcador

ace.lesson.plan.prior.knowledge.title= Conocimientos previos:

##CORRECT DISPLAY FOR LESSON OBJECTIVE
ace.lesson.plan.learning.objectives.title= Objetivo de la lección:
ace.lesson.plan.learning.objectives.instruction= Describa qué es lo que los estudiantes deben saber o ser capaces de hacer al acabar la lección.
ace.lesson.plan.learning.objectives.content= 
ace.lesson.plan.learning.objectives.tooltip= Los objetivos de los planes de lección efectivos a menudo piden que los estudiantes conecten ideas a lo largo de varios días, y son construidos con un objetivo global. 

ace.lesson.plan.lesson.objective.title= Objetivo de la lección:

##CORRECT DISPLAY FOR LESSON ASSESSMENT
ace.lesson.plan.assessment.title= Evaluación de la lección:
ace.lesson.plan.assessment.instruction= Describa la evaluación individual e independiente de la lección. Si es necesario, podrá añadir materiales más abajo.
ace.lesson.plan.assessment.content= 
ace.lesson.plan.assessment.tooltip= Incluya exámenes u otras evaluaciones formales abarcando la lección entera; también se pueden incluir aquí evaluaciones informales y formativas para cada día de la lección.

ace.lesson.plan.lesson.assessment.title= Evaluación de la lección:

##CORRECT DISPLAY FOR BENCHMARK OR STANDARDS
ace.lesson.plan.standards.title= Referencias y estándares:
ace.lesson.plan.standards.instruction= Cite referencias y estándares relacionados con la lección.
ace.lesson.plan.standards.content= 
ace.lesson.plan.standards.tooltip= marcador 

ace.lesson.plan.benchmark.standards.title= Patrones o Estándares:

##CORRECT DISPLAY FOR MATERIALS
ace.lesson.plan.materials.title= Materiales:
ace.lesson.plan.materials.instruction= Liste todos los entregables, hojas de trabajo, presentaciones, equipo de laboratorio, etc., necesarios para llevar a cabo la lección. Si es necesario puede añadir ficheros más abajo.
ace.lesson.plan.materials.content= 
ace.lesson.plan.materials.tooltip= marcador

ace.lesson.plan.materials.needed.title= Materiales necesarios:

ace.lesson.plan.enrichment.title= Enriquecimiento:
ace.lesson.plan.enrichment.instruction= Identifique experiencias que podrían permitir a los estudiantes explorar conceptos a un nivel más profundo.
ace.lesson.plan.enrichment.content= 
ace.lesson.plan.enrichment.tooltip= marcador

ace.lesson.plan.accommodations.title= Acomodaciones:
ace.lesson.plan.accommodations.instruction= Describa modificaciones para estudiantes o grupos de estudiantes específicos que podrían ser necesarios para que consigan los objetivos del plan de lección.
ace.lesson.plan.accommodations.content= 
ace.lesson.plan.accommodations.tooltip= marcador

ace.lesson.plan.anticipated.problems.title= Problemas anticipados:
ace.lesson.plan.anticipated.problems.instruction= Describa problemas comunes que el instructor pueda encontrar durante la lección, y otros posibles fallos de los procedimientos relacionados con el aprendizaje de los estudiantes.
ace.lesson.plan.anticipated.problems.content= 
ace.lesson.plan.anticipated.problems.tooltip= Por ejemplo, puede incluir aquí errores comunes, o cómo gestionar los cambios de tema.


ace.lesson.plan.procedures.title= Procedures:
ace.lesson.plan.procedures.instruction= Introduzca los detalles de cómo esta lección se tiene que llevar a cabo. En cada fila, incluya el tiempo reservado para cada tarea, las tareas de aprendizaje que se llevarán a cabo durante este tiempo, y los métodos y procedimientos utilizados para conseguir esa tarea de aprendizaje.
ace.lesson.plan.procedures.content= 
ace.lesson.plan.procedures.tooltip= ¿Qué instrucciones puede proporcionar para asegurar que usted y otros educadores puedan llevar a cabo con éxito la instrucción planeada durante esta lección?
ace.lesson.plan.procedures.time.tooltip= Indique el número de minutos o el intervalo de tiempo reservado para cada tarea de aprendizaje del día.
ace.lesson.plan.procedures.learningtask.tooltip= Articule los objetivos centrados en los estudiantes, junto las descripciones de sus actividades, instrucciones, preguntas para hacer durante la lección, etc.
ace.lesson.plan.procedures.methods.tooltip= Indique cómo se producirá la tarea de aprendizaje (es decir, individual, pareja, grupo, instrucción directa, o otros métodos docentes).
ace.lesson.plan.procedures.row1.time_sample= Día 1
ace.lesson.plan.procedures.row2.time_sample= ejemplo: 10 min
ace.lesson.plan.procedures.row2.learningtask_sample= Ejemplo: Los estudiantes practican el resumir el argumento de una historia.
ace.lesson.plan.procedures.row2.methodorprocedure_sample= Ejemplo: trabajo en parejas.
ace.lesson.plan.procedures.table.null= No se han producido cambios en la tabla.
ace.lesson.plan.procedures.addrow= Añadir una fila

ace.lesson.plan.required.attachments.title= Anexos requeridos:
ace.lesson.plan.required.attachments.instruction= Seleccione y suba ficheros de su ordenador. Los ficheros anexos no pueden exceder 20MB en total. Estos ficheros se mostrarán como enlaces en el plan de lección publicado. 

ace.lesson.plan.required.attachments.file.attached= Los ficheros que una a este recurso no aparecerán como contribuciones independientes en Curriki; sólo se mostrarán como enlaces dentro de este recurso, y están sujetos a la licencia de este recurso. &lt;br /&gt;&lt;br /&gt;Después de enviar este formulario, considere por favor la posibilidad de añadir estos materiales a Curriki como recursos independientes, de forma que estas contribuciones puedan ser descubiertas y reusadas con mayor facilidad.
ace.lesson.plan.attachments.title= Ficheros anexos:
ace.lesson.plan.required.attachments.tooltip= Añada cualquier fichero referenciado en la lección, ya sean soluciones, entregables, exámenes, u otros.
ace.lesson.plan.attachments.browse.button= Buscar
ace.lesson.plan.attachments.attach.button= Añadir este fichero
ace.lesson.plan.attachments.delete= Borrar

ace.lesson.plan.file.size.maximum= 20000000
ace.lesson.plan.file.size.label= Tamaño total de todos los anexos:
ace.lesson.plan.file.size.oversize= Los anexos de este recurso no pueden sumar más de 20MB. Para guardar este recurso, debe utilizar alguno de los "Borrar" para reducir el tamaño total de los anexos. Recuerde que puede subir cualquier fichero adicional como recurso independiente en vez de añadirlo a este recurso.
ace.lesson.plan.file.size.dialog= Los anexos de este recurso no pueden sumar más de 20MB. Recuerde que puede subir este fichero como un recurso independiente, en vez de como anexo de un recurso.
ace.lesson.plan.file.size.dialog.button= OK

## ACELP STEP 4

form.scratch.step4.header= Paso 4. Revisar y Enviar

##CORRECT DISPLAY FOR STEP 4
ace.form.scratch.step4.instruction= Revise sus entradas una última vez antes de enviar los resultados. &lt;br /&gt; &lt;br /&gt; Si su contenido &lt;i&gt;no está listo&lt;/i&gt; para que lo usen otras personas, recuerde poner a "Privado" los Privilegios de Acceso más arriba. &lt;br /&gt; &lt;br /&gt;Nótese que hay dos campos, Cambios Para la Próxima Vez y Qué Ha Funcionado Bien, que aparecerán en su recurso al ser enviado este formulario. Estos campos aparecerán con un contenido que deberá ser actualizado después de haber llevado a cabo la lección. Cuando quiera actualizar este contenido, haga clic en "Editar" este recurso.

form.scratch.submit.button= Enviar
form.scratch.cancel.button= Cancelar

## ACELP OUTPUT ONLY

ace.lesson.plan.output.heading.icon.url= /xwiki/bin/download/CreateResources/ACELessonPlan/ACElogo.png
ace.lesson.plan.output.heading.icon.height= 75
ace.lesson.plan.output.heading.icon.width= 225
ace.lesson.plan.output.heading.content= Este plan de lección fue creado a partir de una plantilla desarrollada para la Iniciativa de Instrucción y Evaluación patrocinada por la Alianza para la Educación Católica.

ace.lesson.plan.changes_heading= Cambios para la próxima vez:
ace.lesson.plan.changes_content= Aquí el autor de la lección puede reflexionar sobre cambios que quisiera hacer en cursos futuros. Después de dar la lección en el aula, se podrá editar esta sección del recurso wiki para describr los cambios que harán que en el futuro la lección sea más efectiva.

ace.lesson.plan.whatworked_heading= Qué ha funcionado bien:
ace.lesson.plan.whatworked_content= Después de llevar a cabo la lección en clase, edite el recurso wiki y describa actividades particularmente efectivas

## FROM SCRATCH ERROR MESSAGES
form.scratch.title.more.250= Ha introducido más de 250 caracteres en el Título en el paso 1. Por favor, acorte el título.
form.scratch.required.fields.dialog= Por favor, complete los siguientes datos necesarios:
form.scratch.required.fields.dialog.title= - Título
form.scratch.required.fields.dialog.description= - Descripción
form.scratch.required.fields.dialog.subject= - Tema
form.scratch.required.fields.dialog.level= - Nivel educativo
form.scratch.required.fields.dialog.ict= - Tipo de componente instruccional
form.scratch.required.fields.dialog.content= - Contenido
form.scratch.required.fields.dialog.rights= - Propietario de los derechos
form.scratch.required.fields.dialog.button= OK

## LESSON PLAN ERROR MESSAGES

## This list includes error messages for all lesson plan forms where fields with these titles are used. Some forms may share some titles. Not all fields are in play in all forms. Please see specs for form formats/contents, including outlines of included and required elements, and their titles.

## Standard instruction line at top of error message for lesson plan forms:

lesson.plan.required.fields.dialog= Por favor, complete los siguientes datos obligatorios:

## The following fields are required metadata for all lesson plan forms.

lesson.plan.required.fields.dialog.title= - Título
lesson.plan.required.fields.dialog.description= - Descripción
lesson.plan.required.fields.dialog.subject= - Tema
lesson.plan.required.fields.dialog.level= - Nivel educativo
lesson.plan.required.fields.dialog.rights= - Propietario de los derechos
lesson.plan.required.fields.dialog.button= OK

## The following fields are required in specific forms, as per specs.

## CSLP Form
lesson.plan.title.more.250= Ha introducido más de 250 caracteres en el Título en el paso 1. Por favor, acorte este título.
lesson.plan.required.fields.dialog.learning.objectives= - Objetivos de aprendizaje
lesson.plan.required.fields.dialog.procedures= - Procedimientos

## NLLP Form
nortel.lesson.plan.title.more.250= Ha introducido más de 250 caracteres en el Título en el paso 1. Por favor, acorte este título.
lesson.plan.required.fields.dialog.overview= - Resumen
lesson.plan.required.fields.dialog.techinteg= - Integración de tecnología
lesson.plan.required.fields.dialog.prereq= - Prerequisitos de experiencia
lesson.plan.required.fields.dialog.preptime= - Tiempo de preparación del profesor
lesson.plan.required.fields.dialog.timecomplete= - Tiempo estimado de compleción
lesson.plan.required.fields.dialog.materials= - Materiales
lesson.plan.required.fields.dialog.project= - Proyecto
lesson.plan.required.fields.dialog.timemanagement= - Sugerencias de manejo de tiempo
lesson.plan.required.fields.dialog.assess= - Evaluación
lesson.plan.required.fields.dialog.engage= - Captura de atención
lesson.plan.required.fields.dialog.explore= - Explorar
lesson.plan.required.fields.dialog.explain= - Explicar
lesson.plan.required.fields.dialog.elaborate= - Elaborar

lesson.plan.required.fields.dialog.evaluate= - Evaluar
lesson.plan.required.fields.dialog.extend= - Extender

## ACELP Form
ace.lesson.plan.title.more.250= Ha introducido más de 250 caracteres en el título en el paso 1. Por favor, acorte este título.
lesson.plan.required.fields.dialog.priorknowledge= - Conocimiento previo
lesson.plan.required.fields.dialog.numberdays= - Número de días

lesson.plan.required.fields.dialog.lessonobjective= - Objetivo de la lección
lesson.plan.required.fields.dialog.lessonassessment= - Evaluación de la lección
lesson.plan.required.fields.dialog.procedures= - Procedimientos

## GLOBAL SET REQUIRED INFORMATION MODULE CONTENT

## TITLE OF THE RESOURCE
sri.title_title= Título:
sri.title_txt= Si ha copiado este recurso, actualice este campo indicando cómo es diferente del original.

##Appears as default text in the text entry box.
sri.title_content= 

sri.title_tooltip= Nombre de este elemento, que será incluído en listas de búsqueda y como pie de fotos

## DESCRIPTION
sri.description_title= Descripción:
sri.description_txt= Si ha copiado este recurso, actualice este campo indicando cómo es diferente del original.

## To be used later when edit is implemented

sri.copy_info_text= Si ha copiado este recurso, actualice el título y la descripción para indicar en qué difiere del original

sri.description_tooltip= Cuando otras personas lean esta descripción, deberían saber exactamente qué hace este recurso. ¡Cuanto más detalle, mejor!

## SUBJECT
sri.fw_items_title= Subject:
sri.fw_items_txt= Haga clic en las flechas para expandir o contraer los temas.
sri.fw_items_tooltip= Tema(s) que se aplican a su recurso
##Subject tree content can be found below.

## EDUCATIONAL LEVEL
## DEPRICATED
sri.educational_level_title= Nivel educativo:
sri.educational_level_txt= Seleccione uno o más niveles
sri.educational_level_content= 
sri.educational_level_tooltip= Nivel(es) para los que el recurso es apropiado

## CURRENT
sri.educational_level2_title= Nivel educativo:
sri.educational_level2_txt= Seleccione uno o más niveles
sri.educational_level2_content= 
sri.educational_level2_tooltip= Nivel(es) para los que el recurso es apropiado

## INSTRUCTIONAL COMPONENT TYPE
sri.instructional_component2_title= Tipo de componente instruccional:
sri.instructional_component2_txt= Busque la mejor opción. Puede seleccionar múltiples opciones manteniendo apretada la tecla Ctrl (PC) o Manzana (Mac) mientras hace clic en varias opciones para seleccionarlas. Haga clic &lt;a href="http://www.curriki.org/xwiki/bin/view/Coll_curriki/InstructionalComponentTypeICT?bc=;Coll_curriki.CurrikiHelp;Coll_curriki.AboutLearningResources" target="_blank"&gt;aquí&lt;/a&gt; para ver las definiciones.
sri.instructional_component2_content= 
sri.instructional_component2_tooltip= Tipo o formato de contenido que mejor describe su recurso

## ICT list is below in Asset Class

## KEY WORDS
sri.keywords_title= Palabras clave:
sri.keywords_txt= 
sri.keywords_content= 
sri.keywords_tooltip= Palabras que ayudarán a la gente a encontrar su recurso cuando hagan búsquedas en Curriki o en Internet

## LANGUAGE
sri.language_title= Idioma:
sri.language_txt= 
sri.language_content= 
sri.language_tooltip= Idioma que usa el recurso
##Language choices are located below.

## HIDE FROM SEARCH
sri.hidden_from_search_title= Ocultar al buscador:
sri.hidden_from_search_txt= Hay contenidos que no es apropiado que sean mostrados por los buscadores, porque no tienen valor por sí mismos, sino que sólo son interesantes como parte de una entidad mayor.&lt;br /&gt;&lt;br /&gt;Si éste es un elemento de este tipo (por ejemplo, una tabla), haga clic aquí para que este elemento no sea mostrado en los resultados de las búsquedas. 
sri.hidden_from_search_tooltip= Oculta este elemento para que no sea mostrado en los resultados de las búsquedas.
sri.hidden_from_search_after= No mostrar este elemento en los resultados de las búsquedas.

## RIGHT HOLDERS
sri.right_holder_title= Propietario de los derechos:
sri.right_holder_txt= 
sri.right_holder_content= 
sri.right_holder_tooltip= Nombre del propietario del copyright de este recurso

## ACCESS PRIVELEGES
sri.rights_title= Privilegios de acceso:
sri.rights_txt= Seleccione &lt;strong&gt;Privado&lt;/strong&gt; para marcar su material como "borrador" hasta que esté listo para ser publicado&lt;br /&gt;en el repositorio de uso general.
sri.rights_tooltip= Este valor determina quién tiene los derechos para ver o editar un recurso
sri.rights_content= 

## LICENSE DEED

sri.license_type_title= Términos de la licencia:

sri.license_type_txt= Por favor, asegúrese de haber leído y entendido los &lt;a href="/xwiki/bin/view/Main/TOS?xpage=popup" target="TOS"&gt;Términos de Uso&lt;/a&gt; y que tiene los derechos para contribuir este material.&lt;br /&gt;&lt;br /&gt; La licencia Compatible con Curriki proporciona la máxima flexibilidad a la comunidad, de forma que los miembros puedan usar y modificar las contribuciones de otros. La licencia por defecto de Curriki es una licencia muy usada Creative Commons de Atribución &lt;a href="http://creativecommons.org/licenses/by/3.0/" target="CC30" onclick="window.open('http://creativecommons.org/licenses/by/3.0/', 'CC30'); return false;"&gt;3.0&lt;/a&gt;. Si quiere asignar otra licencia a este recurso, por favor, selecciónela de la lista mostrada a continuación. Para saber más sobre las licencias Creative Commons, &lt;a href="http://creativecommons.org/about/licenses/meet-the-licenses" target="CCmeet" onclick="window.open('http://creativecommons.org/about/licenses/meet-the-licenses', 'CCmeet'); return false;"&gt;haga click aquí&lt;/a&gt;.
sri.license_type_heading= Establecer términos de la licencia:

sri.license_type_tooltip= Licencia protegiendo este contenido:

sri.license_type_content= 

## ASSET CLASS: Derived from the AssetClass

## SUBJECT
## Moved to GlobalClassTranslation by Todd on 08-05-2008

## EDUCATIONAL LEVEL
## Moved to GlobalClassTranslation by Todd on 08-05-2008

## ICT
## Moved to GlobalClassTranslation by Todd on 08-05-2008

## ACCESS RIGHTS
## Moved to GlobalClassTranslation by Todd on 08-05-2008

## LANGUAGE
## Moved to GlobalClassTranslation by Todd on 08-05-2008


## LICENSES
## Moved to the GlobalClassTranslation file by Todd Aug-05-2008


##
## ADD PATH SELECTION DIALOGS

##Set Required Information, Part 1
add.setrequiredinfo.part1.title= Establecer información requerida, parte 1
add.setrequiredinfo.part1.guidingquestion= ¿Qué detalles describen y presentan mejor este recurso en los resultados de búsquedas y otras listas?
sri.description.empty_msg= 
sri.keywords.empty_msg= 
add.setrequiredinfo.part1.cancel.button= Cancelar
add.setrequiredinfo.part1.next.button= Siguiente &gt;&gt;


##Set Required Information, Part 2
add.setrequiredinfo.part2.title= Establecer información requerida, parte 2
add.setrequiredinfo.part2.guidingquestion= Revise y actualice los seis campos obligatorios que se muestran a continuación.
add.setrequiredinfo.part2.cancel.button= Cancelar
add.setrequiredinfo.part2.next.button= Siguiente &gt;&gt;


##Contribute Menu
add.contributemenu.title_addto_site= Añadir a Curriki
add.contributemenu.title_addto_composite= Añadir a una colección o a una carpeta
add.contributemenu.guidingquestion_addto_site= ¿Qué le gustaría añadir?

##Note the dynamic portion of the guiding question below where {0} is the title of the folder or collection to which the member is adding the resource:

add.contributemenu.guidingquestion_addto_composite= ¿Qué quiere añadir a {0}?

add.contributemenu.subtitle_have= Algo que ya tengo o que conozco
add.contributemenu.option.file= Un fichero de mi ordenador
add.contributemenu.option.file_browse_button= Buscar
add.contributemenu.option.video_upload= Un video que quiero subir
add.contributemenu.option.link= Un enlace a un recurso estupendo en la web
add.contributemenu.link.empty_msg= http://
add.contributemenu.option.repository= Un recurso que puedo encontrar buscando en Curriki
add.contributemenu.subtitle_make= Algo que quiero hacer en Curriki
add.contributemenu.option.template= Un plan de lección que crearé usando una plantilla
add.contributemenu.option.scratch= Un recurso que crearé "a partir de cero"
add.contributemenu.option.video_capture= Un video que capturaré con mi webcam
add.contributemenu.option.folder= Una carpeta donde organizaré otros recursos

add.contributemenu.required.fields.dialog_file= Haga clic en Buscar para seleccionar un fichero en su ordenador
add.contributemenu.required.fields.dialog_video_upload= Seleccione un video para subir. Una vez cargado, haga clic en Continuar para completar el proceso.
add.contributemenu.required.fields.dialog_link= Introduzca el URL del recurso en la web usando este formato; http://www.website.com ; luego, haga clic sobre Siguiente.
add.contributemenu.required.fields.dialog_video_capture= Capture un video con su webcam. Una vez grabado, haga clic en Continuar para completar el proceso.

add.contributemenu.cancel.button= Cancelar
add.contributemenu.next.button= Siguiente &gt;&gt;

## SELECT A TEMPLATE DIALOG

add.selecttemplate.title= Seleccionar una plantilla
add.selecttemplate.guidingquestion= ¿Qué clase de plan de lección quiere crear?

add.selecttemplate.list1.header= &lt;b&gt;Plantilla de lección por defecto de Curriki&lt;/&gt;
add.selecttemplate.list1.description= La plantilla de lección por defecto de Curriki ofrece la estructura de lección más simple; su único contenido son los Objetivos de Aprendizaje y los Procedimientos.
add.selecttemplate.list1.thumbnail= /xwiki/bin/download/CreateResources/TemplateThumbnails/CurrikiStandardLessonPlanThumb.png
add.selecttemplate.list1.url= /xwiki/bin/view/CreateResources/CurrikiStandardLessonPlan

add.selecttemplate.list2.header= &lt;b&gt;Plan de lección de Nortel LearniT&lt;/b&gt;
add.selecttemplate.list2.description= Nortel LearniT proporciona una plantilla de integración de tecnologías basada en proyectos que incorpora experiencias para capturar la atención, explorar, explicar, elaborar, evaluar, y extender el aprendizaje, con la opción de incluir estándares.
add.selecttemplate.list2.thumbnail= /xwiki/bin/download/CreateResources/TemplateThumbnails/NortelLessonPlanThumb.png
add.selecttemplate.list2.url= /xwiki/bin/view/CreateResources/NortelLearniTLessonPlan

add.selecttemplate.list3.header= &lt;b&gt;Plan de lección de ACE&lt;/b&gt;
add.selecttemplate.list3.description= La Alianza para la Educación Católica (ACE) proporciona una plantilla en la que los detalles de la lección aparecen en una tabla en la que se muestra el tiempo, las tareas de aprendizaje, y los métodos y procedimientos.
add.selecttemplate.list3.thumbnail= /xwiki/bin/download/CreateResources/TemplateThumbnails/ACELessonPlanThumb.png
add.selecttemplate.list3.url= /xwiki/bin/view/CreateResources/ACELessonPlan



add.selecttemplate.cancel.button= Cancelar
add.selecttemplate.next.button= Siguiente &gt;&gt;

##Choose a Location
add.chooselocation.title= Escoger una localización
add.chooselocation.guidingquestion= ¿Dónde quiere añadir esto?
add.chooselocation.instruction= Arrastre el recurso y suéltelo sobre su localización correcta. Detenga el puntero del ratón sobre una carpeta o colección para abrir sus contenidos y colocar el recurso en un sitio dentro.
add.chooselocation.instruction_short= Haga clic para arrastrar y soltar esto:
add.chooselocation.resource_unavailable= -- recurso no disponible --
add.chooselocation.cancel.button= Cancelar
add.chooselocation.next.button= Siguiente &gt;&gt;




##ADD PATH FINAL MESSAGE DIALOGS

##Dialog Titles

add.finalmessage.title_successful= Añadido con éxito
add.finalmessage.title_resource= Recurso añadido
add.finalmessage.title_folder= Carpeta añadida
add.finalmessage.title_collection= Colección añadida

##Operation Successful Messages

add.finalmessage.text_resource_success= Ha contribuido con éxito un recurso. Ahora podrá ver este recurso en Mis Contribuciones.

add.finalmessage.text_resource_simple_success= Ha contribuido con éxito un recurso.

add.finalmessage.text_collection_success= Ha añadido con éxito una nueva colección.

##Note the dynamic content in the link below where {0} is the title of the newly added resource and {1} is the title of the folder or collection into which {0} was added:

add.finalmessage.text_addto_success= Ha añadido con éxito &lt;strong&gt;{0}&lt;/strong&gt; en &lt;strong&gt;{1}&lt;/strong&gt;.

##Note the dynamic content in the link below where {0} is the title of the newly added folder and {1} is the title of the folder or collection into which {1} was added:

add.finalmessage.text_addto_folder_success= Ha añadido con éxito &lt;strong&gt;{0}&lt;/strong&gt; en &lt;strong&gt;{1}&lt;/strong&gt;. Ahora puede añadir y organizar recursos dentro de esta carpeta.

add.finalmessage.text_favorites_success= Ha añadido esto con éxito a Mis Favoritos

add.finalmessage.text_collection_success= Ha añadido con éxito una nueva colección.

add.finalmessage.text_collection_tip1= Haga clic sobre "Construir", al lado de la lista de Mis Colecciones, para añadir recursos a la colección.

add.finalmessage.text_collection_tip2= Haga clic sobre "Editar" para abrir el Constructor de Planes de Estudio, donde podrá construir y organizar esta colección.

add.finalmessage.text_groupcollection_success= Ha añadido con éxito una nueva colección al grupo.

add.finalmessage.text_groupcollection_tip1= Haga clic sobre "Construir", al lado de la lista de Colecciones del Grupo, para añadir recursos a la colección.

add.finalmessage.text_groupcollection_tip2= Haga clic sobre "Editar" para abrir el Contructor de Planes de Estudio, donde podrá construir y organizar esta colección.

##Navigation Options

add.finalmessage.add.link= Añadir
add.finalmessage.favorites.link= Ir a Mis Favoritos
add.finalmessage.contributions.link= Ir a Mis Contribuciones
add.finalmessage.collections.link= Ir a Mis colecciones

add.finalmessage.view.link= Ver

##Note the dynamic content in the link below where {0} is the title of the folder or collection to which the member has just added the resource:

add.finalmessage.viewtarget.link= Ver {0}
add.finalmessage.continue.link= Continuar &gt;&gt;
add.finalmessage.openbuilder.link= Abrir el Constructor de Planes de Estudio
add.finalmessage.close.button= Cerrar

##Add Path Error Messages
add.servertimedout.message.title= Error en el servidor
add.servertimedout.message.text= Se ha producido un error al intentar conectar con el servidor. Por favor, vuelva a intentarlo.
add.servertimedout.message.button= OK
{/pre}
</content></xwikidoc>